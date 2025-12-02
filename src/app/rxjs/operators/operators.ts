import { Component, inject } from '@angular/core';
import { filter, from, interval, map, of, take } from 'rxjs';
import { ApiService } from '../api';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-operators',
  imports: [ReactiveFormsModule],
  templateUrl: './operators.html',
  styleUrl: './operators.css',
})
export class Operators {
  private apiService = inject(ApiService);
  numList = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  rollList = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  timeInterval = interval(1000);
  searchControl = new FormControl();

  constructor() {
    this.timeInterval.pipe(take(6)).subscribe((res) => {
      console.log(res);
    });
    // this.searchControl.valueChanges
    //   .pipe(filter((searchText) => searchText.length >= 3))
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
    // this.timeInterval
    //   .pipe(filter((num) => num % 2 === 0))
    //   .subscribe((res: number) => console.log(res));
    // this.apiService.getJsonUser().subscribe((res) => {
    //   console.log(res);
    // });
    this.apiService.getSingleUser().subscribe((res) => {
      console.log(res);
    });
    // this.numList.pipe(filter((num) => num % 2 === 0)).subscribe((res) => {
    //   console.log(res);
    // });
    // this.rollList
    //   .pipe(map((res: any) => res.filter((val: any) => val % 2 === 0)))
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
  }
}
