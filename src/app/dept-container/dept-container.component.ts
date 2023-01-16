import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Department } from '../classes/department';

@Component({
  selector: 'app-dept-container',
  templateUrl: './dept-container.component.html',
  styleUrls: ['./dept-container.component.css'],
})
export class DeptContainerComponent implements OnInit, OnChanges {
  @Input() department: Department; //input data is coming from parent side
  subHeadding = 'Data Passing';
  year = 1984;
  @Output() emitter = new EventEmitter<string>();
  @Output() emitter1 = new EventEmitter<number>();
  constructor() {
    console.log('called automatically'); //1
    this.department = {
      deptId: '',
      deptName: '',
      deptBudget: 0,
      deptEstYear: 0,
      imageUrl: '',
      deptEstDate: new Date(),
    };
  }

  // ngAfterViewInit(): void {
  //   //throw new Error('Method not implemented.');
  //   console.log(' component loaded 1st time');
  //   this.emitter.emit(this.subHeadding);
  // }

  //1st lifecycle method of component - this function get called automatically, only once
  ngOnInit(): void {
    // if component gets reloaded then method gets called again but once
    // console.log('called only once');
    // if component gets reloaded then method gets called again but once
    console.log('called only once when component loaded 1st time');
    this.emitter.emit(this.subHeadding);
    this.emitter1.emit(this.year);
  }
  ngOnChanges(changes: any): void {
    //throw new Error('Method not implemented.');
    // 5 times
    console.log('called every time when input(from parent) value changes');
    console.log(changes);
  }
}
