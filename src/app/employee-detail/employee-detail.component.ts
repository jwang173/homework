import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template:`
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}.{{employee.name}}-{{employee.age}}</li>
    </ul>
    <h3>errorMsg</h3>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = []
  public errorMsg;
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
          error => this.errorMsg = error);
  }

}
