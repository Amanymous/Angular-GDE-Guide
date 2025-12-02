import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild,
  WritableSignal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [JsonPipe, FormsModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
// export class Counter {
//   count = signal(0);

//   increment() {
//     this.count.update((value) => value + 1);
//   }

//   decrement() {
//     this.count.update((value) => value - 1);
//   }
// }
// export class Counter {
//   courseName = signal('Angular');
//   courseDuration = signal<string>('1 Month');
//   cityList = signal<string[]>(['Karachi', 'Lahore', 'Islamabad']);
//   stateList = signal<string[]>(['Sindh', 'Punjab', 'KPK']);
//   empObj = signal<any>({
//     empId: 11,
//     empName: '',
//     empCity: '',
//     empPinCode: '',
//     empState: '',
//   });
//   obj = signal<any>({ name: 'Aman', age: 25 });
//   cityName: string = '';
//   fname = signal('');
//   lname = signal('');
//   midname = signal('');
//   fullName = computed(
//     () => this.fname() + ' ' + this.midname() + ' ' + this.lname()
//   );

//   constructor() {
//     effect(() => {
//       console.log('Effect Called!', this.lname() + this.fname());
//     });
//   }

//   updateName(value: WritableSignal<string>, event: any) {
//     value.set(event.target.value);
//   }

//   addCity() {
//     // this.cityList.set([...this.cityList(), this.cityName]);
//     this.cityList.update((value) => [...value, this.cityName]);
//   }

//   changeName() {
//     this.courseName.set('Angular Signals');
//   }

//   changeArray() {
//     this.cityList.set(['a', 'b', 'c']);
//   }

//   changeEmpIdValue(event: any) {
//     const value = event.target.value;
//     this.empObj.update((obj) => ({ ...obj, empId: value }));
//   }

//   changeFormValue(keyName: string, event: any) {
//     const value = event.target.value;
//     this.empObj.update((obj) => ({ ...obj, [keyName]: value }));
//   }
// }
export class Counter {
  http = inject(HttpClient);
  title = input<string>('');
  onClose = output<string>();
  titleChild = viewChild<ElementRef<HTMLInputElement>>('titleName');
  counter$ = interval(1000); // Observable
  counter = toSignal(this.counter$, {
    // Convert to signal
    initialValue: 0,
  });
  post: any = toSignal(
    this.http.get('https://jsonplaceholder.typicode.com/posts/1'),
    { initialValue: null }
  );

  ngOnInit() {
    this.onClose.emit('');
    console.log(this.titleChild()?.nativeElement);
  }

  handleClose() {
    this.onClose.emit('closed'); // emit string
  }
}
