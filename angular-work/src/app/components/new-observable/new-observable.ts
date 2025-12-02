import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-observable',
  imports: [],
  templateUrl: './new-observable.html',
  styleUrl: './new-observable.css',
})
export class NewObservable {
  ngOnInit() {
    const newObservable = new Observable<number>((observer) => {
      for (let i = 0; i < 5; i++) {
        if (i === 4) {
          observer.error('Error');
        }
        observer.next(i);
      }
      observer.next(1000);
      observer.complete();
    });
    newObservable.subscribe((data) => {
      console.log(data);
    });
    newObservable.subscribe((data) => {
      console.log('observer 2', data);
    });
  }
}
