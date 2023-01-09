import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({});
  updateForm: FormGroup = new FormGroup({});
  employee = new Employee();
  myBorder = 'green 2px solid';
  passPattern =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{7,15}$';
  namePattern = '^[A-Za-z]*$';
  constructor() {
    this.registerForm = new FormGroup(
      {
        empName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(this.namePattern),
        ]),
        empSalary: new FormControl('', [
          Validators.required,
          Validators.min(0),
        ]),
        empGender: new FormControl(''),
        empAddress: new FormControl('', [Validators.required]),
        empContactNo: new FormControl('', [Validators.required]),
        empDepartmentId: new FormControl('', [Validators.required]),
        empEmail: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(this.passPattern),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      this.passwordMatch
    );

    this.updateForm = new FormGroup({
      empName: new FormControl(this.myEmp.empName, [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(this.namePattern),
      ]),
      empSalary: new FormControl(this.myEmp.empSalary, [
        Validators.required,
        Validators.min(0),
      ]),
      empGender: new FormControl(this.myEmp.empGender),
      empAddress: new FormControl(this.myEmp.empAddress, Validators.required),
      empDepartmentId: new FormControl(
        this.myEmp.empDepartmentId,
        Validators.required
      ),
      empContactNo: new FormControl(
        this.myEmp.empContactNo,
        Validators.required
      ),
      empEmail: new FormControl(this.myEmp.empEmail, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.myEmp.password, [
        Validators.required,
        Validators.pattern(this.passPattern),
      ]),
    });
  }

  collectData(): void {
    console.log('register Form', this.registerForm.value);
    this.employee = this.registerForm.value;
    console.log(this.employee);
  }
  get deptId() {
    return this.registerForm.get('empDepartmentId');
  }
  get ename() {
    return this.registerForm.get('empName');
  }
  get econtact() {
    return this.registerForm.get('empContactNo');
  }
  get esalary() {
    return this.registerForm.get('empSalary');
  }

  get eaddress() {
    return this.registerForm.get('empAddress');
  }

  get eemail() {
    return this.registerForm.get('empEmail');
  }

  get epass() {
    return this.registerForm.get('password');
  }
  get econfirmpass() {
    return this.registerForm.get('confirmPassword');
  }

  private passwordMatch(regForm: AbstractControl) {
    // special custom validator function
    console.log('automatically called ');
    let passNode = regForm.get('password');
    let cPassNode = regForm.get('confirmPassword');
    console.log(passNode?.value);
    console.log(cPassNode?.value);
    if (passNode?.value == cPassNode?.value) return null;
    else return { passMatch: true };
  }
  nodeType = 'password';
  showP(event: any): void {
    if (event.target.checked) this.nodeType = 'text';
    else this.nodeType = 'password';
  }

  myEmp = new Employee(
    33,
    'Mahesh',
    67000,
    'male',
    'abc',
    'JW',
    5434543434,
    'abc@gmail.com',
    'abc'
  );
  updateF(): void {
    this.myEmp = this.updateForm.value;
    console.log(this.myEmp);
  }
  // passwordCheck(regForm: FormGroup): boolean {
  //   let pass = regForm.get('password')?.value;
  //   let cPass = regForm.get('confirmPassword')?.value;
  //   if (pass === cPass) return true;
  //   return false;
  // }
  /*
    builtin validation method(form control object){
        if value==""
        return {'required':true}
        else 
          null
    }
  */
}
