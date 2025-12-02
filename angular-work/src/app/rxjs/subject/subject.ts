import { Component, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subject',
  imports: [FormsModule],
  templateUrl: './subject.html',
  styleUrl: './subject.css',
})
export class Subjects {
  private apiService = inject(ApiService);

  studentName$ = new Subject();
  rollNo$ = new Subject<number>();
  takeTill$ = new Subject<void>();
  courseName$ = new Subject<string>();

  userId: number = 0;

  constructor() {
    setTimeout(() => {
      this.studentName$.next('Angular 20');
      this.rollNo$.next(123);
      this.takeTill$.next();
      this.apiService.courseDuration.next('2 Month');
    }, 3000);

    this.apiService.roleBehaviour.subscribe((res) => {
      console.log(res);
    });
    this.apiService.roleSub.subscribe((res) => {
      console.log('role constructor:', res);
    });
  }

  ngOnInit() {
    this.apiService.courseDuration.subscribe((res) => {
      console.log(res);
    });
    this.studentName$.subscribe((res) => {
      console.log('--', res);
    });
    this.rollNo$.subscribe((res) => {
      console.log(res);
    });
  }

  getUser() {
    this.apiService.getUserById(this.userId!).subscribe((res: any) => {
      console.log(res);
    });
  }

  onRoleChange(event: any) {
    debugger;
    const selectedRole = event.target.value;
    this.apiService.roleBehaviour.next(selectedRole);
    this.apiService.roleSub.next(selectedRole);
    this.apiService.roleBehaviour.subscribe((res) => {
      console.log(res);
    });
    this.apiService.roleSub.subscribe((res) => {
      console.log('role:', res);
    });
  }
}
