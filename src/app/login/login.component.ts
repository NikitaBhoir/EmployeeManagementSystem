import { Component } from '@angular/core';
import { Employee } from '../classes/employee';
import { EmployeeCRUDService } from '../services/employee-crud.service';
import { LoginCheckService } from '../services/login-check.service';

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

  loginMessage = '';
  empArray: Employee[] = [];
  constructor(
    private loginService: LoginCheckService,
    private empService: EmployeeCRUDService
  ) {}
  collectData(loginForm: any): void {
    console.log(loginForm.value.empEmail);
    console.log(loginForm.value.password);
    this.emp = loginForm.value as Employee;
    console.log(this.emp);
    this.empService.getAllEmployees().subscribe({
      next: (successResponse) => {
        this.empArray = successResponse as Employee[];
        this.loginService.loginCheck(
          this.empArray,
          loginForm.value.empEmail,
          loginForm.value.password
        );
        if (this.loginService.loggedIn == true)
          this.loginMessage = 'you are logged in successfully....';
        else this.loginMessage = 'Either username or password is incorrect';
      },
      error: (errResponse) => console.log(errResponse),
    });

    // this.loginService.loginCheck(
    //   loginForm.value.empEmail,
    //   loginForm.value.password
    // );
    // if (this.loginService.loggedIn == true)
    //   this.loginMessage = 'you are logged in successfully....';
    // else this.loginMessage = 'Either username or password is incorrect';
  }
}
