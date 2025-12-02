import { Component, inject } from '@angular/core';
import {
  catchError,
  concatMap,
  exhaustMap,
  forkJoin,
  lastValueFrom,
  mergeMap,
  of,
  Subject,
  switchMap,
} from 'rxjs';
import { ApiService } from '../api';
import { HttpClient } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-combine-observable',
  imports: [ReactiveFormsModule],
  templateUrl: './combine-observable.html',
  styleUrl: './combine-observable.css',
})
// export class CombineObservable {
//   private apiService = inject(ApiService);
//   private http = inject(HttpClient);

//   state$ = of(['Sindh', 'Punjab', 'KPK']);
//   city$ = of(['Karachi', 'Lahore', 'Islamabad']);

//   constructor() {
//     // forkJoin([
//     //   this.state$,
//     //   this.city$,
//     //   this.apiService.getJsonUser(),
//     //   this.apiService.getPosts(),
//     // ]).subscribe(
//     //   (res) => {
//     //     console.log(res);
//     //   },
//     //   (error) => {
//     //     console.log(error);
//     //   }
//     // );
//     // forkJoin([
//     //   this.state$.pipe(catchError(() => of([]))), // fallback if state$ fails
//     //   this.city$.pipe(catchError(() => of([]))), // fallback if city$ fails
//     //   this.apiService.getJsonUser().pipe(catchError(() => of([]))),
//     //   this.apiService.getPosts().pipe(catchError(() => of([]))), // fallback if getPosts fails
//     // ])
//     //   .pipe(catchError(() => of([], [], [])))
//     //   .subscribe((res) => {
//     //     console.log(res); // Array of results, with failed Observables replaced by fallback
//     //   });
//   }

//   async ngOnInit() {
//     const api = await lastValueFrom(
//       forkJoin([
//         this.state$.pipe(catchError(() => of([]))), // fallback if state$ fails
//         this.city$.pipe(catchError(() => of([]))), // fallback if city$ fails
//         this.apiService.getJsonUser().pipe(catchError(() => of([]))), // fallback if getJsonUser fails
//         this.apiService.getPosts().pipe(catchError(() => of([]))), // fallback if getPosts fails
//       ])
//     );

//     console.log(api);
//   }
// }
// =====================================================
export class CombineObservable {
  private apiService = inject(ApiService);
  private http = inject(HttpClient);

  searchControl = new FormControl();
  loginClick$ = new Subject<void>();
  // switchMap cancel the prevoius observable and only consider the latest one
  // maergeMap allow to execute all the observable properly in parallel
  // comcatMap allow 1 observable to finish at a time. It runs sequentially and never drops anything
  // exhaustMap starts the first inner observable and ignores all next source emissions until the first one completes.
  constructor() {
    // this.searchControl.valueChanges.subscribe((search: string) => {
    //   this.http
    //     .get('https://dummyjson.com/products/search?q=' + search)
    //     .subscribe((res: any) => {
    //       debugger;
    //       console.log('User response', res);
    //     });
    // });

    // this.searchControl.valueChanges
    //   .pipe(
    //     switchMap((search: string) =>
    //       this.http.get('https://dummyjson.com/products/search?q=' + search)
    //     )
    //   )
    //   .subscribe((res: any) => {
    //     console.log(res);
    //   });

    // this.searchControl.valueChanges
    //   .pipe(
    //     mergeMap((search: string) =>
    //       this.http.get('https://dummyjson.com/products/search?q=' + search)
    //     )
    //   )
    //   .subscribe((res: any) => {
    //     console.log(res);
    //   });

    // this.searchControl.valueChanges
    //   .pipe(
    //     concatMap((search: string) =>
    //       this.http.get('https://dummyjson.com/products/search?q=' + search)
    //     )
    //   )
    //   .subscribe((res: any) => {
    //     console.log(res);
    //   });

    this.loginClick$
      .pipe(
        exhaustMap(() => {
          return this.http.get('https://jsonplaceholder.typicode.com/users');
        })
      )
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  onLogin() {
    debugger;
    this.loginClick$.next();
  }
}
