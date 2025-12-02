import { Component, Self } from '@angular/core';
import { MyService } from '../service/myservice';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.less',
  // providers: [MyService],
})
export class ChildComponent {
  // constructor(private myService: MyService) {
  //   console.log(this.myService); //use with providers: [MyService],
  // }
  constructor(private myService: MyService) {
    console.log(this.myService); // or if you donot provider it will take from because child is in parent
  }
  // constructor(@Self() private myService: MyService) {
  //   console.log(this.myService);
  // }
}
