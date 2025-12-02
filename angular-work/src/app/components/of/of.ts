import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  imports: [],
  templateUrl: './of.html',
  styleUrl: './of.css',
})
export class Of {
  // Takes any number of arguments (numbers, strings, objects, arrays, etc.)
  // and converts them into an Observable.
  // Emits the values synchronously, one by one, and then completes.
  // The of operator does accept a promise as a value, but it does not
  // automatically unwrap it. It simply emits the promise itself as a
  // single value, instead of emitting the resolved value of the promise.
  value = of(42, 99);
  arrayofNumber = of(...[1, 2, 3, 4, 5]);
  arrayOfString = of(...['What', 'is', 'your', 'name?']);
  valueObject = of({ id: 1, name: 'John' });
  arrayOfObject = of(...[{ id: 1, name: 'John' }]);
  valueString = of('Aman');
  // Convert object values into array, then spread into of()
  valueObject$ = of(...Object.values({ id: 1, name: 'John' }));
  promise = Promise.resolve('Hello!');
  promiseObs = of(this.promise);

  ngOnInit() {
    this.value.subscribe((val) => console.log('val:', val));
    this.valueString.subscribe((val) => console.log('valueString:', val));
    this.arrayofNumber.subscribe((val) => console.log('array of number:', val));
    this.arrayOfString.subscribe((val) => console.log('array of string:', val));
    this.valueObject.subscribe((val) => console.log('value of object', val));
    this.arrayOfObject.subscribe((val) => console.log('array of object:', val));
    this.valueObject$.subscribe((val) =>
      console.log('use object values:', val)
    );
    this.promiseObs.subscribe((val) => console.log('obs:', val));
  }
}
