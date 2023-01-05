import { Component } from '@angular/core';
import { Department } from '../classes/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent {
  title = 'Employee Management System';
  age = 0;
  counter = 0;
  interval1: any;
  colorArray = ['green', 'blue', 'red', 'pink', 'yellow'];

  bstyle = 'solid';
  bColor = 'purple';
  myStyle = {
    borderColor: this.bColor,
    borderWidth: '2px',
    borderStyle: 'dotted',
    backgroundColor: 'gray',
  };

  deptArray = new Array<Department>(); //generic way
  department = new Department(
    'LD',
    'Research and Development',
    100000,
    2015,
    'https://picsum.photos/id/560/200/300',
    new Date('21/12/2000')
  );
  obj: any;
  childData: string | undefined = '';
  childData1: number | undefined = 0;
  constructor() {
    this.deptArray = [
      new Department(
        'sL',
        'Sales',
        2000000,
        2020,
        'https://picsum.photos/seed/picsum/200/300',
        new Date('22 nov 2021')
      ),
      new Department(
        'LD',
        'Learning and Development',
        60000,
        2015,
        'https://picsum.photos/200/300/?blur=2',
        new Date('02 Jan 2001')
      ),
      new Department(
        'JW',
        'Java Web',
        3400000,
        2000,
        'https://picsum.photos/seed/picsum/200/300',
        new Date('02 Jan 2001')
      ),
      new Department(
        'DN',
        'Dot Net',
        7500000,
        2000,
        'https://picsum.photos/seed/picsum/200/300',
        new Date('02 Jan 1995')
      ),
    ];

    setTimeout(() => (this.department.deptName = 'Design Department'), 6000);
    this.interval1 = setInterval(() => {
      this.changeBorderColor();
    }, 1000);
  }
  changeBorderColor() {
    this.myStyle.borderColor = this.colorArray[this.counter];
    this.counter++;
    if (this.counter == this.colorArray.length) this.counter = 0;
  }

  Display(): void {
    console.log('deptName= ', this.department.deptName);
  }

  passVal(name: any): void {
    console.log('Name= ', name);
  }

  addDeparment(
    id: string,
    name: string,
    budget: string,
    year: string,
    img: string
  ): void {
    console.log(id + ' ' + name + ' ' + budget + ' ' + year);
    let newDept = new Department(
      id,
      name,
      parseFloat(budget),
      parseInt(year),

      '',
      new Date('02 Jan 2001')
    );
    this.deptArray.push(newDept);
  }

  test(): void {
    console.log('Event Generated');
  }

  station = '';
  stationArray = ['Thane', 'Pune'];
  addStation(): void {
    this.stationArray.push(this.station);
  }

  //change border color when hover on table

  applyStyle() {
    this.obj = this.myStyle;
  }
  clearStyle() {
    // this will remove interval effect
    clearInterval(this.interval1);
  }

  //
  styleData = '';
  styleArray = ['myDepartment', 'fontStyle'];
  AddStyle(): void {
    this.styleArray.push((this.styleData = 'colorStyle'));
  }
  RemoveStyle(): void {
    this.styleArray.pop();
  }

  //
  acceptData(data: string) {
    console.log(data);
    this.childData = data;
  }
  acceptData1(data: number) {
    console.log(data);
    this.childData1 = data;
  }

  //orderby
  orderObject = {
    sortProperty: 'deptId',
    sortOrder: false,
    sortCase: true,
  };
  sortBy(property: string) {
    this.orderObject.sortProperty = property;
  }
}
