import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { DepartmentComponent } from './department/department.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registeruser', component: RegisterComponent },
  { path: 'registeruser/:eid', component: RegisterComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: 'companydetails', component: CompanyDetailsComponent }],
  },
  {
    path: 'departments',
    component: DepartmentComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [
      { path: 'empdetails', component: EmpDetailsComponent },
      { path: 'companydetails', component: CompanyDetailsComponent },
    ],
  },
  { path: 'employeedetails', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
