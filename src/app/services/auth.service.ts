import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeAttribute } from '../models/employee-attribute.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  createEmployee(employeeInfo: EmployeeAttribute){
    const url = `${this.baseServerURL}/Add`;
    return this.http.post<any>(url, employeeInfo);
  }

  constructor(private http: HttpClient) { }

  baseServerURL = "https://localhost:7297/api/Employee"

  registerEmployee(empl:any): Observable<any>{
    console.log("employee: ",empl);
    console.log("baseServerURL: ", this.baseServerURL);
    return this.http.post(this.baseServerURL+"/add",empl, httpOptions);
  }

  getEmployees(){
    const url = `${this.baseServerURL}/GetAll`;
    return this.http.get<any>(url);
  }
}
