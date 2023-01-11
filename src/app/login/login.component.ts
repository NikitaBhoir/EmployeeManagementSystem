import { Component } from '@angular/core';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  emp: Employee = {
    id: 0,
    empName: '',
    empSalary: 0,
    empGender: '',
    empAddress: '',
    empContactNo: 0,
    empDepartmentId: '',
    empEmail: '',
    password: '',
    getDetail: function (): void {
      throw new Error('Function not implemented.');
    },
  };
  collectData(loginForm: any): void {
    console.log(loginForm.value.empEmail);
    console.log(loginForm.value.password);
    this.emp = loginForm.value as Employee;
    console.log(this.emp);
  }
}
