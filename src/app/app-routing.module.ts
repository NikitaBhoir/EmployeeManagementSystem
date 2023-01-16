import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { DepartmentComponent } from './department/department.component';
import { DeptContainerComponent } from './dept-container/dept-container.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaterialformComponent } from './materialform/materialform.component';
import { RegisterComponent } from './register/register.component';
import { AuthServiceService } from './services/auth-service.service';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';

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
    children: [{ path: 'deptcontainer', component: DeptContainerComponent }],
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [
      { path: 'empdetails', component: EmpDetailsComponent },
      { path: 'companydetails', component: CompanyDetailsComponent },
    ],
  },
  {
    path: 'employeedetails',
    component: EmployeeDetailsComponent,
    canActivate: [AuthServiceService],
  },
  { path: 'materialform', component: MaterialformComponent },
  { path: '**', component: ViewNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
