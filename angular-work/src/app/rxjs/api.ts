import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  map,
  Observable,
  shareReplay,
  Subject,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private userDetails = new Map<number, Observable<any>>();

  courseDuration = new BehaviorSubject<string>('1 Month');

  roleBehaviour = new BehaviorSubject<string>('');

  roleSub = new Subject<string>();

  getUserById(id: number): any | undefined {
    if (!this.userDetails.has(id)) {
      const userData = this.http
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .pipe(shareReplay(1));
      this.userDetails.set(id, userData);
    }
    return this.userDetails.get(id);
  }

  getJsonUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      tap((userList) => {
        console.log(userList);
      }),
      map((userList: any) =>
        userList.map((user: any) => {
          return { id: user.id, name: user.name };
        })
      ),
      tap((userList) => {
        console.log(userList);
      })
    );
  }

  getSingleUser() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users/2')
      .pipe(map((userData: any) => userData.address));
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getUser() {
    return {
      id: 1,
      name: 'Aman',
      email: 'aman.mirza358@gmail.com',
    };
  }
}
