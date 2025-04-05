import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NzTableModule, NzTableQueryParams } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { CommonModule } from '@angular/common';

export interface CustomColumn {
  name: string;
  value: string;
  sortKey?: string;
  searchKey?: string;
  alignment?: 'left' | 'right' | 'center';
  headerAlignment?: 'left' | 'right' | 'center';
  width?: number;
  clickEvent?: boolean;
  default?: boolean;
  preventClick?: boolean;
}

export interface MtCustomColumn extends CustomColumn {
  id?: number;
}

export interface MtTableSort {
  [key: string]: 'ascend' | 'descend' | null;
}

export interface TablePagination {
  selected: number;
  size: number;
  total: number;
}

export interface MtTableEvent {
  pagination: TablePagination;
  sort: MtTableSort;
  search: Record<string, string>;
}

@Component({
  selector: 'app-mt-table',
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzModalModule,
    NzIconModule,
    NzButtonModule,
    NzLayoutModule,
    NzGridModule,
    NzSelectModule,
    NzInputModule,
    NzCheckboxModule,
    NzAlertModule,
    CdkDrag,
    CdkDropList,
  ],
  templateUrl: './mt-table.component.html',
  styleUrl: './mt-table.component.less',
})
export class MtTableComponent {
  _data: Array<any> = [];

  @Input() selectable = true;
  @Input() customizable = true;
  @Input() isReload = true;
  @Input() isExport = true;
  @Input() isLoading = false;
  @Input() moduleId?: number;
  @Input() columns: Array<CustomColumn> = [];
  @Input() set data(value: Array<any>) {
    value?.forEach((x) => (x.checked = false));
    this._data = value;
  }
  @Input() serverPagination = false;
  @Input() pageSize = 10;
  @Input() exportFileName = 'export';

  @Output() cellClick = new EventEmitter<{
    item: any;
    column: MtCustomColumn;
  }>();
  @Output() tableEvent = new EventEmitter<MtTableEvent>();

  search: Record<string, string> = {};
  sort: MtTableSort = {};
  pagination: TablePagination = { selected: 1, size: 10, total: 0 };

  customColumns: MtCustomColumn[] = [];
  isColumnConfigModalVisible = false;
  available: MtCustomColumn[] = [];
  shown: MtCustomColumn[] = [];
  searchBoxes: string[] = [];

  dragStarted = false;
  loading = { saveCol: false, col: false, reset: false, refresh: false };

  ngOnInit() {
    this.pagination.size = this.pageSize;
    this.setupColumns();
  }

  setupColumns() {
    if (this.columns) {
      this.customColumns = this.columns.map((x) => ({
        name: x.name,
        value: x.value,
        sortKey: x.sortKey,
        searchKey: x.searchKey,
        alignment: x.alignment,
        headerAlignment: x.headerAlignment,
        width: x.width,
        clickEvent: x.clickEvent,
        default: x.default !== false,
        preventClick: x.preventClick,
      }));
    }

    this.resetConfig();
  }

  resetConfig() {
    this.shown = this.customColumns.filter((x) => x.default);
    this.available = this.customColumns.filter((x) => !x.default);
  }

  onSearch(event: Event | KeyboardEvent, columnKey: string) {
    if (!(event.target instanceof HTMLInputElement)) return;

    const regex = /^[a-zA-Z0-9\s\-_@.#&+]*$/;
    if (!regex.test(event.target.value)) {
      // this.notificationSvc.error('Invalid search parameters');
      return;
    }

    if (
      this.search[columnKey] === event.target.value ||
      (!this.search[columnKey] && !event.target.value)
    )
      return;
    this.search[columnKey] = event.target.value;

    if (this.pagination.selected === 1) {
      this.tableEvent.emit(this.makeTableEvent());
    } else {
      this.pagination.selected = 1;
    }
  }

  makeTableEvent(): MtTableEvent {
    return {
      pagination: this.pagination,
      sort: this.sort,
      search: this.search,
    };
  }

  onQueryParams(event: NzTableQueryParams) {
    this.tableEvent.emit(this.makeTableEvent());
  }

  onRefresh() {
    for (const key of Object.keys(this.sort)) {
      this.sort[key] = null;
    }

    for (const key of Object.keys(this.search)) {
      this.search[key] = '';
    }

    for (const key in this.searchBoxes) {
      this.searchBoxes[key] = '';
    }

    if (this.pagination.selected === 1) {
      this.tableEvent.emit(this.makeTableEvent());
    } else {
      this.pagination.selected = 1;
    }
  }

  onCellClick(item: any, column: MtCustomColumn) {
    this.cellClick.emit({ item, column });
  }

  onCheckChange(value: boolean, row: any) {
    this._data.forEach((x) => {
      if (x !== row) x.checked = false;
    });
  }

  onApplyColumnConfig() {
    this.customColumns = [...this.shown, ...this.available];
    this.isColumnConfigModalVisible = false;
  }

  onExcelExport() {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');
    const headers = this.customColumns
      .filter((x) => x.default)
      .map((col) => col.name);
    const dataKeys = this.customColumns
      .filter((x) => x.default)
      .map((col) => col.value);
    worksheet.addRow(headers);

    this._data?.forEach((item) => {
      const row: any[] = [];
      dataKeys?.forEach((key) => {
        row.push(item[key]);
      });
      worksheet.addRow(row);
    });

    this.customColumns
      .filter((x) => x.default)
      .forEach((col, index) => {
        let maxColumnLength = col.name.length;
        this._data?.forEach((item) => {
          const cellData = item[col.value]?.toString() || '';
          if (cellData.length > maxColumnLength) {
            maxColumnLength = cellData.length;
          }
        });
        worksheet.columns[index].width = maxColumnLength + 2;
      });

    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      saveAs(
        blob,
        `${this.exportFileName}-${new Date().toLocaleDateString()}.xlsx`
      );
    });
  }

  onCancel() {
    this.isColumnConfigModalVisible = false;
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.shown = this.shown.map((x) => {
      x.default = true;
      return x;
    });

    this.available = this.available.map((x) => {
      x.default = false;
      return x;
    });
  }

  addCustom(value: MtCustomColumn, index: any) {
    value.default = true;
    this.shown = [...this.shown, value];
    this.available.splice(index, 1);
  }

  deleteCustom(value: MtCustomColumn, index: any) {
    value.default = false;
    this.available = [...this.available, value];
    this.shown.splice(index, 1);
  }
}
