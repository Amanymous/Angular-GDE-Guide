import { Component, inject } from '@angular/core';
import { ApiService } from '../api';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription, take, takeUntil } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-unsubscribe',
  imports: [AsyncPipe],
  templateUrl: './unsubscribe.html',
  styleUrl: './unsubscribe.css',
})
export class Unsubscribe {
  private apiService = inject(ApiService);
  private http = inject(HttpClient);

  userList: any[] = [];
  // way 1
  subscription!: Subscription;
  // way 2
  subscriptionList: Subscription[] = [];
  // way 3
  subTakeUntil!: Subject<void>;

  // way 4 take()

  // way 5 using async pipe
  userList$ = new Observable<any[]>();

  ngOnInit() {
    this.userList$ = this.http.get<any[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
    this.getUser();
    // this.getPosts();
    console.log(this.subscriptionList);
  }

  // getUser() {
  //   this.subscription = this.http
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .subscribe((res: any) => {
  //       this.userList = res;
  //     });
  // }

  // getUser() {
  //   const sub = this.http
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .subscribe((res: any) => {
  //       this.userList = res;
  //     });
  //   this.subscriptionList.push(sub);
  // }

  // getPosts() {
  //   const sub = this.http
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .subscribe((res: any) => {});
  //   this.subscriptionList.push(sub);
  // }

  // getUser() {
  //   const sub = this.http
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .pipe(takeUntil(this.subTakeUntil))
  //     .subscribe((res: any) => {
  //       this.userList = res;
  //     });
  //   this.subscriptionList.push(sub);
  // }

  getUser() {
    const sub = this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(take(1))
      .subscribe((res: any) => {
        this.userList = res;
      });
    this.subscriptionList.push(sub);
  }

  ngDestroy() {
    console.log(this.subscription, this.subscriptionList);

    this.subscription.unsubscribe();
    this.subTakeUntil.next();
    this.subscriptionList.forEach((sub) => {
      sub.unsubscribe();
    });
    console.log(this.subscription, this.subscriptionList);
  }
}
