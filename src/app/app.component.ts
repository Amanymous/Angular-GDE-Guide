import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MtTableComponent } from './mt-table/mt-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MtTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'angular-app1';
  columns: any[] = [
    { name: 'ID', value: 'id', sortKey: 'id', default: true },
    {
      name: 'Name',
      value: 'name',
      sortKey: 'name',
      searchKey: 'name',
      default: true,
    },
    { name: 'Age', value: 'age', sortKey: 'age', default: true },
    { name: 'Address', value: 'address', default: false },
    { name: 'Email', value: 'email', searchKey: 'email', default: true },
  ];

  tableData = [
    {
      id: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      email: 'john@example.com',
    },
    {
      id: 2,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      email: 'jim@example.com',
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      email: 'joe@example.com',
    },
    {
      id: 4,
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      email: 'jim2@example.com',
    },
  ];

  onCellClick(event: any) {
    console.log('Cell clicked:', event);
  }

  onTableEvent(event: any) {
    console.log('Table event:', event);
    // Handle pagination, sorting, or filtering changes here
    // Typically you would make an API call with the new parameters
  }
}
