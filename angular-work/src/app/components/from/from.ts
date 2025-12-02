import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-from',
  imports: [],
  templateUrl: './from.html',
  styleUrl: './from.css',
})
export class From {
  // The from operator is used to convert various types of data into an Observable.
  // In other words, it allows you to take an existing data structure (like an array,
  // promise, or iterable) and turn it into a stream that you can subscribe to, apply
  // RxJS operators on, and react to asynchronously.
  numberArray = from([10, 20, 30]);
  arrayOfObject = from([{ id: 1, name: 'John' }]);
  value = from([21]);
  promise = from(Promise.resolve('Hi'));
  promises = from(
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('Data loaded!'), 1000);
    })
  );
  set = from(new Set(['a', 'b', 'c', 'a']));
  ngOnInit() {
    this.numberArray.subscribe((val) => console.log('number array:', val));
    this.arrayOfObject.subscribe((val) => console.log('array of object:', val));
    this.promise.subscribe((val) => console.log('promise:', val));
    this.promises.subscribe((val) => console.log('promises:', val));
    this.set.subscribe((val) => console.log('set:', val));
    this.value.subscribe((val) => console.log('value:', val));
  }
}
