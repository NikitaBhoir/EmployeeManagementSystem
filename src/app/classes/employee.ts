export class Employee1 {
  empId: number;
  empName: string;
  empDepartment: string;
  empSalary: number;
  empExperience: number;

  constructor(
    id: number,
    name: string,
    department: string,
    salary: number,
    experience: number
  ) {
    this.empId = id;
    this.empName = name;
    this.empDepartment = department;
    this.empSalary = salary;
    this.empExperience = experience;
  }
}

export class Employee {
  empId: number;
  empName: string;
  empSalary: number;
  empGender: string;
  empAddress: string;
  empContactNo: number;
  empDepartmentId: string;
  empEmail: string;
  password: string;
  constructor(
    id = 0,
    name = '',
    salary = 0,
    gender = 'f',
    address = '',
    did = '',
    empContactNo = 0,
    email = '',
    pswd = ''
  ) {
    this.empDepartmentId = did;
    this.empAddress = address;
    this.empGender = gender;
    this.empId = id;
    this.empName = name;
    this.empSalary = salary;
    this.empContactNo = empContactNo;
    this.empEmail = email;
    this.password = pswd;
  }
}
