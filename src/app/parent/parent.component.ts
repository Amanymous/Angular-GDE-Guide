import { Component, Host, Optional, Self, SkipSelf } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MyService } from '../service/myservice';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.less',
  providers: [MyService],
})
export class ParentComponent {
  // constructor(@Optional() private myService: MyService) {
  //   console.log(this.myService);
  // }
  // constructor(@Self() private myService: MyService) {
  //   console.log(this.myService);
  // }
  // constructor(@Optional() @Self() private myService: MyService) {
  //   console.log(this.myService);
  // }
  // constructor(@SkipSelf() private myService: MyService) {
  // start the search for the service in the parent ElementInjector instead of the
  // current one.This is useful when you to use a service from a parent component or directive
  //  cannot use sikpSelf and self at the same time
  // console.log(this.myService);
  // }
  constructor(@Host() private myService: MyService) {
    // it will search service is current component or if you are not passing service in
    // current component you have to pass viewProvider in parent component
    console.log(this.myService);
  }
}
