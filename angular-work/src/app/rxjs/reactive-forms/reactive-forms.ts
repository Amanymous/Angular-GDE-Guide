import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { combineLatest, debounceTime } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
  private fb = inject(FormBuilder);

  searchControl = new FormControl();
  passworMismatch: any = false;
  ngOnInit() {
    // debounceTime put delay
    this.searchControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((search: string) => {
        console.log('Search=', search);
      });
    this.myForm.controls['confirmPassword'].disable();
    // this.searchControl.valueChanges.subscribe((res) => {
    //   console.log(res);
    // });

    this.myForm.controls['password'].valueChanges.subscribe((res) => {
      if (res && res.trim() !== '') {
        this.myForm.controls['confirmPassword'].addValidators([
          Validators.required,
        ]);
        this.myForm.controls['confirmPassword'].enable();
      } else {
        // Optional: disable and clear confirmPassword when password becomes empty
        this.myForm.controls['confirmPassword'].clearValidators();
        this.myForm.controls['confirmPassword'].disable();
        this.myForm.controls['confirmPassword'].reset();
      }

      this.myForm.controls['confirmPassword'].updateValueAndValidity();
    });
    this.myForm.statusChanges.subscribe((res) => {
      debugger;
    });
    // combineLatest allows you to combine multiple observable same time
    combineLatest([
      this.myForm.controls['password'].valueChanges,
      this.myForm.controls['confirmPassword'].valueChanges,
    ]).subscribe(([pwd, confirmPwd]) => {
      this.passworMismatch = pwd && confirmPwd && pwd !== confirmPwd;
    });
  }

  myForm = this.fb.group({
    name: [''],
    subscribe: [false],
    email: [''],
    password: [''],
    confirmPassword: [''],
    age: [''],
    license: [''],
    country: [''],
    currency: [''],
    search: [''],
  });

  onSubmit() {
    console.log(this.myForm.value);
  }
}
