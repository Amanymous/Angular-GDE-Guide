import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, fromEvent, Observable, Subscriber } from 'rxjs';
import { NewObservable } from './components/new-observable/new-observable';
import { Of } from './components/of/of';
import { From } from './components/from/from';
import { Pipe } from './components/pipe/pipe';
import { Counter } from './signals/counter/counter';
import { ComputedSignal } from './signals/computed-signal/computed-signal';
import { Effect } from './signals/effect/effect';
import { RxjsBasics } from './rxjs/rxjs-basics/rxjs-basics';
import { Operators } from './rxjs/operators/operators';
import { Subjects } from './rxjs/subject/subject';
import { CombineObservable } from './rxjs/combine-observable/combine-observable';
import { ReactiveForms } from './rxjs/reactive-forms/reactive-forms';
import { Unsubscribe } from './rxjs/unsubscribe/unsubscribe';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NewObservable,
    Of,
    From,
    Pipe,
    Counter,
    ComputedSignal,
    Effect,
    RxjsBasics,
    Operators,
    Subjects,
    CombineObservable,
    ReactiveForms,
    Unsubscribe,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
// of,from,pipe,map,filter,first,interval,take,forkJoin,combineLatest
// concat,distinctUntilChange,debounceTime,mergemap,switchmap,exhaustmap
// catchError,retry,shareReplay,firstValuefrom,lastValuefrom
export class App {
  protected title = 'angular-practice';

  postArray = [
    { title: 'abc1', description: 'abc description' },
    { title: 'abc2', description: 'abc description' },
    { title: 'abc3', description: 'abc description' },
  ];
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolve the promise. sending data');
    }, 2000);
  });
  postsArrayObservable = from(this.postArray);
  promiseObservable = from(this.promise);
  // Observable is like blueprint or producer of data
  // it doesnot emit value value until we subscribe
  myObservalbe = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(12);
    subscriber.next(13);
    subscriber.complete();
  });

  // An observer is anobject that reacts to the data emitted by Observable
  // it contain 3 callback next,error and complete

  observer = {
    next: (x: any) => console.log('Value:', x),
    error: (err: any) => console.log('Error:', err),
    complete: () => console.log('Done!'),
  };
  ngOnInit() {
    // this.myObservalbe.subscribe((value) => console.log('Promise done', value));
    // this.promiseObservable.subscribe((value) => console.log(value));
    // this.postsArrayObservable.subscribe((val) => {
    //   console.log(val);
    // });
  }

  ngAfterViewInit() {
    fromEvent(document.getElementById('click-btn')!, 'click').subscribe((val) =>
      console.log(val)
    );
  }

  handleHeaderClose(msg: string) {
    console.log('Header closed:', msg);
  }
}
