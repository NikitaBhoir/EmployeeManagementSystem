export class Department {
  deptId: string;
  deptName: string;
  deptBudget: number;
  deptEstYear: number;
  imageUrl: string;
  deptEstDate: Date;

  constructor(
    Id: string,
    Name: string,
    Budget: number,
    EstYear: number,
    imgUrl: string,
    date: Date
  ) {
    this.deptId = Id;
    this.deptName = Name;
    this.deptEstYear = EstYear;
    this.deptBudget = Budget;
    this.imageUrl = imgUrl;
    this.deptEstDate = date;
  }
}
