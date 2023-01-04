import { Component } from '@angular/core';
import { Department } from '../classes/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent {
  deptArray = new Array<Department>(); //generic way
  department = new Department(
    'LD',
    'Research and Development',
    100000,
    2015,
    'https://picsum.photos/id/560/200/300'
  );

  constructor() {
    this.deptArray = [
      new Department(
        'sL',
        'Sales',
        2000000,
        2020,
        'https://picsum.photos/seed/picsum/200/300'
      ),
      new Department(
        'LD',
        'Learning and Development',
        100000,
        2015,
        'https://picsum.photos/200/300/?blur=2'
      ),
      new Department(
        'JW',
        'Java Web',
        400000,
        2000,
        'https://picsum.photos/seed/picsum/200/300'
      ),
      new Department(
        'DN',
        'Dot Net',
        500000,
        2000,
        'https://picsum.photos/seed/picsum/200/300'
      ),
    ];
  }

  Display(): void {
    console.log('deptName= ', this.department.deptName);
  }
}
