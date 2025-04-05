import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Observer4 } from '../service/Observer4';

@Component({
  selector: 'app-new-observable',
  standalone: true,
  imports: [],
  templateUrl: './new-observable.component.html',
  styleUrl: './new-observable.component.css',
})
export class NewObservableComponent {
  newObservable: Subscription | any;
  ngOnInit() {
    this.newObservable = new Observable((observer) => {
      for (let i = 0; i < 5; i++) {
        if (i === 4) {
          observer.error('unknown error');
        }
        observer.next(i);
      }
      observer.complete();
    });
    let observer = {
      next: (value: number) => console.log('value observer 1:', value),
      error: (error: Error) => console.log('error:', error),
      complete: () => console.log('Complete all done'),
    };
    this.newObservable.subscribe(observer);

    this.newObservable.subscribe({
      next: (value: number) => console.log('value observer 2:', value),
      error: (error: Error) => console.log('error:', error),
      complete: () => console.log('Complete all done'),
    });

    this.newObservable.subscribe(
      (value: number) => console.log('value observer 3:', value),
      (error: Error) => console.log('error:', error),
      () => console.log('Complete all done')
    );
    this.newObservable.subscribe(new Observer4());
  }
}
