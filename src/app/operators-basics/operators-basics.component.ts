import { Component } from '@angular/core';
import { filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-operators-basics',
  standalone: true,
  imports: [],
  templateUrl: './operators-basics.component.html',
  styleUrl: './operators-basics.component.css',
})
export class OperatorsBasicsComponent {
  ngOnInit() {
    const newObservable = interval(1000);
    newObservable.subscribe((value) => {
      if (value % 2 === 0) console.log(value);
    });
    newObservable
      .pipe(
        filter((number) => {
          return number % 2 === 0; // filter out odd numbers
        }),
        map((number) => {
          return 'Even Number' + number;
        })
      )
      .subscribe((number) => {
        console.log('pipe', number);
      });
  }
}
