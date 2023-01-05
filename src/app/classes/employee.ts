export class Employee {
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
