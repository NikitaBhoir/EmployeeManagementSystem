import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../classes/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeCRUDService {
  basePath: string = 'http://localhost:3000/employees';
  constructor(private httpClient: HttpClient) {}
  addEmployee(emp: Employee) {
    return this.httpClient.post(this.basePath, emp);
  }
  getAllEmployees() {
    return this.httpClient.get(this.basePath);
  }
  getEmployeeById(eid: number) {
    return this.httpClient.get(`${this.basePath}/${eid}`);
  }
  deleteEmployee(eid: number) {
    return this.httpClient.delete(`${this.basePath}/${eid}`);
  }
}
