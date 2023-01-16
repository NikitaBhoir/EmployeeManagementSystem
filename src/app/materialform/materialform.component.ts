import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../classes/student';

@Component({
  selector: 'app-materialform',
  templateUrl: './materialform.component.html',
  styleUrls: ['./materialform.component.css'],
})
export class MaterialformComponent implements OnInit {
  header: string = 'Profile Add';
  routeParameter: string | null = '';
  studentList: Student[] = [];
  student: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    mobile: 0,
    profileImageUrl: '',
    gender: '',
  };
  DisplayedColumns: string[] = [
    'firstName',
    'lastName',
    'dateOfBirth',
    'email',
    'mobile',
    'gender',
  ];
  isNewStudent = false;
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();
  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.studentList = [
      {
        id: 2,
        firstName: 'Nikita',
        lastName: 'Bhoir',
        dateOfBirth: '2/11/1999',
        email: 'nik@gmail.com',
        mobile: 9812323244,
        profileImageUrl: 'NA',
        gender: 'female',
      },
    ];
  }
  ngOnInit(): void {
    let eid = 0;

    this.routeParameter = this.activeRoute.snapshot.paramMap.get('eid');
    if (this.routeParameter == null) this.isNewStudent = true;
  }
  onAdd(): void {
    console.log('student', this.student);
    this.studentList.push(this.student);
  }
}
