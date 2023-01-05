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
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { DeptContainerComponent } from './dept-container/dept-container.component';
import { OrderModule } from 'ngx-order-pipe';
import { PrefixPipe } from './custompipes/prefix.pipe';
import { SuffixPipe } from './custompipes/suffix.pipe';

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
    SuffixPipe, // this dependancy added automatically when new component is created ,if not then dd manually
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, OrderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
