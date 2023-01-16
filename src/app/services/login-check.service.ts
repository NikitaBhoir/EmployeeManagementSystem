import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../classes/employee';

@Injectable({
  providedIn: 'root',
})
export class LoginCheckService {
  basePath: string = 'http://localhost:3000/employees';
  empArr: Employee[] = [];
  emp: Employee | undefined;
  loggedIn = false;
  constructor(private httpClient: HttpClient) {}

  // checkEmp(emailId: string, password: string) {
  //   this.httpClient.get(`${this.basePath}`).subscribe({
  //     next: (successResponse) => {
  //       this.empArr = successResponse as Employee[];
  //       console.log(this.empArr);

  //       this.emp = this.empArr.find(
  //         (emp) => emp.empEmail == emailId && emp.password == password
  //       );
  //       console.log(this.emp);

  //       if (this.emp != null) {
  //         this.loggedIn = true;
  //         console.log('in if ' + this.loggedIn);
  //       } else {
  //         this.loggedIn = false;
  //         console.log('in else ' + this.loggedIn);
  //       }
  //     },
  //     error: (errorres) => console.log(errorres),
  //   });

  //   // if (this.emp != null) {
  //   //   this.loggedIn = true;
  //   //   console.log('in if ' + this.loggedIn);
  //   // } else {
  //   //   this.loggedIn = false;
  //   //   console.log('in else ' + this.loggedIn);
  //   // }
  // }
  loginCheck(empArr: Employee[], emailId: string, password: string) {
    //this.checkEmp(emailId, password);

    // this.httpClient.get(`${this.basePath}`).subscribe({
    //   next: (successResponse) => {
    //     this.empArr = successResponse as Employee[];
    //     console.log(this.empArr);

    //     this.emp = this.empArr.find(
    //       (emp) => emp.empEmail == emailId && emp.password == password
    //     );
    //     console.log(this.emp);

    //     if (this.emp != null) {
    //       this.loggedIn = true;
    //       console.log('in if ' + this.loggedIn);
    //     } else {
    //       this.loggedIn = false;
    //       console.log('in else ' + this.loggedIn);
    //     }
    //   },
    //   error: (errorres) => console.log(errorres),
    // });

    this.emp = empArr.find((ep) => ep.empEmail && ep.password);
    if (this.emp != null) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    console.log('inlg-check', this.loggedIn);

    return this.loggedIn;
  }
}
