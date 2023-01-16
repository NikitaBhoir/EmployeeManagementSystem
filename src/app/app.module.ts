import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DepartmentComponent } from './department/department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { DeptContainerComponent } from './dept-container/dept-container.component';
import { OrderModule } from 'ngx-order-pipe';
import { PrefixPipe } from './custompipes/prefix.pipe';
import { SuffixPipe } from './custompipes/suffix.pipe';
import { HomeComponent } from './home/home.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { MathComponent } from './math/math.component';
import { OperationComponent } from './operation/operation.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MaterialformComponent } from './materialform/materialform.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FootersectionComponent } from './footersection/footersection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DepartmentComponent,
    EmployeeComponent,
    DeptContainerComponent,
    PrefixPipe,
    SuffixPipe,
    HomeComponent,
    ViewNotFoundComponent,
    CompanyDetailsComponent,
    EmpDetailsComponent,
    MathComponent,
    OperationComponent,
    EmployeeDetailsComponent,
    MaterialformComponent,
    FootersectionComponent, // this dependancy added automatically when new component is created ,if not then dd manually
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OrderModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
