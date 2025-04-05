import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Observable, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cancelling-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cancelling-observable.component.html',
  styleUrl: './cancelling-observable.component.css',
})
export class CancellingObservableComponent {
  timerSubscription: Subscription | undefined;
  timerBrowserSubscription: Subscription | undefined;
  timers: number[] = [];
  ngOnInit() {
    // const newObservable = interval(1000);
    const newObservable = new Observable<number>((observer) => {
      let i = 0;
      let interval = setInterval(() => {
        console.log('Interval Executing');
        observer.next(i++);
        // if (i === 6) {
        //   observer.error('An Error Occured');
        // this.timerSubscription?.unsubscribe();
        // this.timerBrowserSubscription?.unsubscribe();
        // }
      }, 1000);
      return () => {
        console.log('Call when observer is unsubscribe');
        clearInterval(interval);
      };
    });
    this.timerSubscription = newObservable.subscribe((data) => {
      console.log(data);
    });

    this.timerBrowserSubscription = newObservable.subscribe((data: number) => {
      this.timers.push(data);
    });
    this.timerSubscription.add(this.timerBrowserSubscription);
    // this.timerSubscription.remove;
  }

  cancelTimer() {
    console.log('Cancel the observable');
    this.timerSubscription?.unsubscribe();
    // this.timerBrowserSubscription?.unsubscribe();
  }
}
