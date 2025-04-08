import { Component, EventEmitter, Input, Output } from '@angular/core';
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
import { Workbook } from 'exceljs';
import { CommonModule } from '@angular/common';

export interface CustomColumn {
  name: string;
  value: string;
  sortKey?: string;
  searchKey?: string;
  alignment?: 'left' | 'right' | 'center';
  headerAlignment?: 'left' | 'right' | 'center';
  minWidth?: number;
  clickEvent?: boolean;
  preventClick?: boolean;
}

export interface MtCustomColumn extends CustomColumn {
  id?: number;
  default: boolean;
  width?: number;
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
  search?: string;
  sort?: string;
  pagination: {
    selected: number;
    size: number;
  };
}

@Component({
  selector: 'custom-mt-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzModalModule,
    NzIconModule,
    NzButtonModule,
    NzLayoutModule,
    NzGridModule,
    NzInputModule,
    NzCheckboxModule,
    CdkDrag,
    CdkDropList,
  ],
  templateUrl: './mt-table.component.html',
  styleUrls: ['./mt-table.component.less'],
})
export class CustomMtTableComponent {
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
    this._data = value || [];
  }
  @Input() serverPagination = false;
  @Input() pageSize = 10;
  @Input() exportFileName: string = 'export';

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
    // Using dummy data instead of API calls
    this.customColumns = this.columns.map((x: any, index) => ({
      id: index + 1,
      name: x.name,
      value: x.dataKey || x.value,
      sortKey: x.sortKey,
      searchKey: x.searchKey,
      alignment: x.alignment,
      headerAlignment: x.headerAlignment,
      width: x.minWidth,
      clickEvent: x.clickEvent,
      default: true,
      preventClick: x.preventClick,
    }));

    this.resetConfig();
  }

  resetConfig() {
    this.shown = this.customColumns.filter((x) => x.default);
    this.available = this.customColumns.filter((x) => !x.default);
  }

  // Change the search implementation
  onSearch(event: Event | KeyboardEvent, columnKey: string) {
    if (!(event.target instanceof HTMLInputElement)) return;

    // Update both search object and searchBoxes array
    const searchValue = event.target.value;
    this.search[columnKey] = searchValue;

    // Find the index of the column to update searchBoxes
    const colIndex = this.customColumns.findIndex(
      (c) => c.searchKey === columnKey
    );
    if (colIndex >= 0) {
      this.searchBoxes[colIndex] = searchValue;
    }

    // Always emit the event when search changes
    this.emitTableEvent();
  }

  // Update the emitTableEvent method
  emitTableEvent() {
    // Handle sorting
    const sortEntry = Object.entries(this.sort).find(
      ([_, value]) => value !== null
    );
    const sortString = sortEntry
      ? `${sortEntry[0]} ${sortEntry[1] === 'ascend' ? 'asc' : 'desc'}`
      : '';

    // Handle search - simpler format
    const searchString = Object.entries(this.search)
      .filter(([_, value]) => !!value)
      .map(([key, value]) => `${key}:${value}`)
      .join(',');

    this.tableEvent.emit({
      pagination: this.pagination,
      sort: sortString,
      search: searchString, // Now using simpler format
    });
  }

  onQueryParams(event: NzTableQueryParams) {
    this.emitTableEvent();
  }

  onRefresh() {
    // Reset all filters and sorting
    for (const key of Object.keys(this.sort)) {
      this.sort[key] = null;
    }

    for (const key of Object.keys(this.search)) {
      this.search[key] = '';
    }

    for (let i = 0; i < this.searchBoxes.length; i++) {
      this.searchBoxes[i] = '';
    }

    if (this.pagination.selected == 1) this.emitTableEvent();
    else this.pagination.selected = 1;
  }

  onCellClick(item: any, column: MtCustomColumn) {
    this.cellClick.emit({ item, column });
  }

  onCheckChange(value: boolean, row: any) {
    this._data.forEach((x) => {
      if (x != row) x.checked = false;
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

    workbook.xlsx.writeBuffer().then(async (buffer) => {
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${
        this.exportFileName
      }-${new Date().toLocaleDateString()}.xlsx`;
      link.click();
      setTimeout(() => {
        URL.revokeObjectURL(link.href);
        link.remove();
      }, 100);
    });
  }

  onSaveColumnConfig() {
    this.loading.saveCol = true;
    // Simulate API call with timeout
    setTimeout(() => {
      // this.notificationSvc.success('Columns Saved Successfully');
      this.loading.saveCol = false;
    }, 1000);
  }

  onResetColumnConfig() {
    this.loading.reset = true;
    // Simulate API call with timeout
    setTimeout(() => {
      for (const key of Object.keys(this.sort)) {
        this.sort[key] = null;
      }
      this.setupColumns();
      // this.notificationSvc.success('Columns Restored Successfully');
      this.loading.reset = false;
    }, 1000);
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
