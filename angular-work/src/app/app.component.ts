import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CustomMtTableComponent,
  MtTableEvent,
} from './mt-table/mt-table.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTableModule, NzTableQueryParams } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MyService } from './service/myservice';

interface CustomColumn {
  name: string;
  value: string;
  sortKey?: string;
  searchKey?: string;
  minWidth: number;
}

// Define a type for the table data
interface Employee {
  id: number;
  name: string;
  email: string;
  status: string;
  age: number;
  department: string;
  joinDate: string;
}
@Component({
  selector: 'app-root',
  imports: [
    NzTableModule,
    NzModalModule,
    NzIconModule,
    NzButtonModule,
    NzLayoutModule,
    NzGridModule,
    NzInputModule,
    NzCheckboxModule,
    FormsModule,
    NzDropDownModule,
    CommonModule,
    NzMenuModule,
    ParentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  // providers: [MyService],
  viewProviders: [MyService],
})
export class AppComponent {}
