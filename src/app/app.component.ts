import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  distinctUntilChanged,
  distinctUntilKeyChanged,
  from,
  fromEvent,
  of,
} from 'rxjs';
import { CommonModule } from '@angular/common';
import { NewObservableComponent } from './new-observable/new-observable.component';
import { FunctionObservableComponent } from './function-observable/function-observable.component';
import { functionObs, functionObservable } from './service/Function';
import { CancellingObservableComponent } from './cancelling-observable/cancelling-observable.component';
import { OperatorsBasicsComponent } from './operators-basics/operators-basics.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MtTableComponent } from './mt-table/mt-table.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewObservableComponent,
    CommonModule,
    FunctionObservableComponent,
    CancellingObservableComponent,
    OperatorsBasicsComponent,
    NzButtonModule,
    MtTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
// export class AppComponent {
//   title = 'angular-app';
//   @ViewChild('click-btn', { static: true }) clickBtn!: ElementRef;

//   postArray = [
//     { title: 'John 1', description: 'abc 1' },
//     { title: 'John 2', description: 'abc 2' },
//     { title: 'John 3', description: 'abc 3' },
//   ];

//   postArrayObservable$ = from(this.postArray);
//   promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('===', this.postArray);

//       resolve('resolve');
//     }, 3000);
//   });
//   promiseObservable$ = from(this.promise);
//   constructor() {
//     console.log('this.promiseObservable$:', this.promiseObservable$);
//     this.postArrayObservable$.subscribe({
//       next: (value) => console.log(value),
//       error: (error) => console.error('Error: ' + error),
//       complete: () => console.log('Complete'),
//     });
//     this.promiseObservable$.subscribe({
//       next: (value) => console.log(value),
//       error: (error) => console.error('Error: ' + error),
//       complete: () => console.log('Complete'),
//     });
//   }

//   ngAfterViewInit() {
//     fromEvent(document.getElementById('click-btn')!, 'click').subscribe({
//       next: (value) => console.log(value),
//       error: (error) => console.error('Error: ' + error),
//       complete: () => console.log('Complete click'),
//     });
//   }
// }
export class AppComponent {
  counts: any;
  // constructor() {
  //   console.log('Before Function Call');
  //   console.log(functionObs());
  //   console.log(functionObs());
  //   console.log('After Function Call');
  //   console.log('Before Observable Call');
  //   functionObservable.subscribe((data) => {
  //     console.log(data);
  //   });
  //   console.log('After Observable Call');
  // }

  // ngOnInit() {
  //   debugger;
  //   const totallyDifferentBuilds$ = of(
  //     { name: 'Alice', age: 25 },
  //     { name: 'Alice', age: 25 },
  //     { name: 'Bob', age: 30 },
  //     { name: 'Bob', age: 30 },
  //     { name: 'Charlie', age: 25 },
  //     { name: 'Charlie1', age: 25 }
  //   )
  //     .pipe(distinctUntilKeyChanged('age'))
  //     .subscribe((x) => console.log(x));
  // }

  columns = [
    { name: 'Name', value: 'name' },
    { name: 'Age', value: 'age' },
    { name: 'Country', value: 'country' },
  ];

  data = [
    { name: 'John', age: 28, country: 'USA' },
    { name: 'Jane', age: 22, country: 'UK' },
    { name: 'Mike', age: 32, country: 'Canada' },
  ];

  isLoading = false;
  onCellClick(event: any) {
    console.log(event);
  }
}
