import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzTableModule, NzTableQueryParams } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mt-table',
  standalone: true,
  imports: [NzTableModule, NzPaginationModule, CommonModule],
  templateUrl: './mt-table.component.html',
  styleUrl: './mt-table.component.css',
})
export class MtTableComponent {
  @Input() selectable = true;
  @Input() customizable = true;
  @Input() columns: Array<any> = [];
  @Input() data: Array<any> = [];
  @Input() isLoading = false;
  @Input() serverPagination = false;
  @Input() pageSize = 10;
  @Input() isExport = true;
  @Input() exportFilename = 'data-export';

  @Output() cellClick = new EventEmitter<{ row: any; column: any }>();

  pagination = { selected: 1, size: 10, total: 0 };
  customColumns: any = [];
  search: any = {};

  _data: Array<any> = [];
  rangeTemplate: any;

  ngOnInit() {
    this.customColumns = this.columns;
    this._data = this.data;
    this.pagination.size = this.pageSize;
  }
  onSearch(event: KeyboardEvent, column: string) {
    const input = event.target as HTMLInputElement;
    if (input && input.value) {
      this.search[column] = input.value;
    }
  }
  onRowClick(row: any, column: any) {
    this.cellClick.emit({ row, column });
  }

  onQueryParams(event: NzTableQueryParams) {}

  onRefresh() {
    this._data = [...this.data];
    this.pagination.selected = 1;
  }

  trackByValue(index: number, item: any) {
    return item.value;
  }
}
