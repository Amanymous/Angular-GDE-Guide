import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  imports: [],
  templateUrl: './computed-signal.html',
  styleUrl: './computed-signal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// export class ComputedSignal {
//   count: WritableSignal<number> = signal(0);

//   items: WritableSignal<number[]> = signal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//   evenItems: Signal<number[]> = computed(() => {
//     console.log('Filtering even numbers.');
//     return this.items().filter((item) => item % 2 === 0);
//   });

//   doubleCount: Signal<number> = computed(() => this.count() * 2);

//   expensiveComputation = computed(() => {
//     console.log('check');
//     return this.count() * 4;
//   });

//   ngOnInit() {
//     console.log(this.doubleCount());

//     this.count.set(5);
//     this.count.update((count) => count * 2);
//     console.log(this.doubleCount());
//     console.log(this.count());
//     console.log('expensiveComputation=', this.expensiveComputation());
//   }

//   expensiveCount() {
//     console.log(this.expensiveComputation());
//     console.log('evenItems=', this.evenItems());
//   }

//   increment() {
//     debugger;
//     // this.count.update((value) => value + 1);
//     this.items.set([10, 15, 20, 25, 30]);
//     console.log(this.items());
//   }
// }

// =========================================================================
export class ComputedSignal {
  showCount = signal(false);
  count: WritableSignal<number> = signal(0);

  doubleCount: Signal<number> = computed(() => this.count() * 2);

  conditionalCount = computed(() => {
    if (!this.showCount()) {
      return 'Nothing to show here';
    } else {
      return 'the count value is ' + this.count();
    }
  });

  getCondition() {
    console.log(this.conditionalCount());
  }

  increment() {
    this.count.update((value) => value + 1);
    console.log('this.count=', this.count());
  }

  updateShowCount() {
    this.showCount.update((value) => !value);
  }

  ngOnInit() {
    this.getCondition();
  }
}
