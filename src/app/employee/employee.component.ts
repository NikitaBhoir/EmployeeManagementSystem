import { Component } from '@angular/core';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employees = new Array<Employee>();
  myStyle1 = {
    borderColor: 'purple',
    borderWidth: '5px',
    fontFamily: 'Times New Roman',
  };
  constructor() {
    this.employees = [
      new Employee(21, 'Rina', 'SD', 2200000, 13),
      new Employee(22, 'Anamika', 'L&D', 240000, 1.5),
      new Employee(23, 'Priya', 'DevOps', 520000, 4),
    ];
  }
}
