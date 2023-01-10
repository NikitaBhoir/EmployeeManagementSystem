import { Component } from '@angular/core';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css'],
})
export class MathComponent {
  addResult = 0;
  counter1 = this.mathsService.getCounter(); // get initial count from method

  // we can directly define instance  of variable in constructor for Dependancyinjection
  constructor(private mathsService: MathsService) {}

  AddNum(addForms: any) {
    let n1 = addForms.value.num1;
    let n2 = addForms.value.num2;
    this.addResult = this.mathsService.mathAdd(n1, n2);
  }
  getCount() {
    this.mathsService.incrementCounter();
    this.counter1 = this.mathsService.getCounter();
  }
}
