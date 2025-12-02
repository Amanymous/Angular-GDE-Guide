import { Component } from '@angular/core';
import { from, interval, Observable, of, tap, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs-basics',
  imports: [],
  templateUrl: './rxjs-basics.html',
  styleUrl: './rxjs-basics.css',
})
export class RxjsBasics {
  cityList: string[] = ['Karachi', 'Lahore', 'Islamabad'];
  cityList$ = of(['Karachi', 'Lahore', 'Islamabad']); // it will whole array
  cityList2$ = from(['Karachi', 'Lahore', 'Islamabad']); // it will emit 1 by 1
  myInterval$ = interval(1000);
  timer$ = timer(5000);

  constructor() {
    // console.log(this.cityList, this.cityList$);
    // this.cityList$
    //   .pipe(
    //     tap((cities: string[]) => {
    //       return cities.join(','); // Side effect: log the cities
    //     })
    //   )
    //   .subscribe();

    // this.timer$.subscribe(() => {
    //   console.log('Timer:');
    // });
    // this.myInterval$.subscribe((res: number) => {
    //   console.log('myInterval: ', res);
    // });

    this.cityList$.subscribe((city) => {
      debugger;
      console.log(...city.join(','));
    });

    this.cityList2$.subscribe((city: string) => {
      console.log(...city);
    });

    const obj = new Observable((value) => {
      value.next('This is demo Text.');
    });
    obj.subscribe((msg) => {
      console.log(msg);
    });
  }
}
