import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.html',
  styleUrl: './effect.css',
})
export class Effect {
  count = signal(0);
  userAction = signal('clicked');
  a = signal(0);
  b = signal(0);

  increment() {
    this.count.update((value) => value + 1);
  }

  ngOnInit() {
    console.log('done');

    this.userAction.set('submitted');
  }
  constructor() {
    console.log(`User action changed: ${this.userAction()}`);

    effect(
      () => {
        // console.log(`Currecnt count: ${this.count()}`);
        // console.log(`User action changed: ${this.userAction()}`);
        this.a.set(this.b() + 1);
      },
      { allowSignalWrites: true }
    );
  }
}
