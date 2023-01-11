import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../classes/employee';
import { EmployeeCRUDService } from '../services/employee-crud.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  empArr: Employee[] = [];
  constructor(private empCrud: EmployeeCRUDService, private router: Router) {}
  ngOnInit(): void {
    // this method gets auto called
    this.getAllRecords();
  }

  deleteById(id: number) {
    this.empCrud.deleteEmployee(id).subscribe({
      next: (successResponse) =>
        console.log('deleted successfully', id, successResponse),
      error: (errorResponse) => console.log('error occur', errorResponse),
    });
    this.getAllRecords();
  }
  getAllRecords() {
    this.empCrud.getAllEmployees().subscribe({
      next: (successres) => {
        console.log(successres), (this.empArr = successres as Employee[]);
      },
      error: (errorres) => console.log(errorres),
    });
  }
}
