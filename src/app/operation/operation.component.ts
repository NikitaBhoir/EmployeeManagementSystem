import { Component } from '@angular/core';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
  providers: [MathsService], //so because of this ,this componant get special service from math service , without this it will work as  common service
  // means any componant can rad and change valye and it uses that changed value eg: if other componant updated counter value to 4 then this componant get initial conter value as 4 ,
  // but when you used it as special service by providing in special service array then you can use it personally with special services,eg: here initial counter value get 0
})
export class OperationComponent {
  counter1 = this.mathsService.getCounter(); // get initial count from method

  // we can directly define instance  of variable in constructor for Dependancyinjection
  constructor(private mathsService: MathsService) {}

  getCount() {
    this.mathsService.incrementCounter();
    this.counter1 = this.mathsService.getCounter();
  }
}
