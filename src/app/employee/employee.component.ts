import { Component } from '@angular/core';
import { Employee1 } from '../classes/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employees = new Array<Employee1>();
  myStyle1 = {
    borderColor: 'purple',
    borderWidth: '5px',
    fontFamily: 'Times New Roman',
  };
  constructor() {
    this.employees = [
      new Employee1(21, 'Rina', 'SD', 2200000, 13),
      new Employee1(22, 'Anamika', 'L&D', 240000, 1.5),
      new Employee1(23, 'Priya', 'DevOps', 520000, 4),
    ];
  }
}
