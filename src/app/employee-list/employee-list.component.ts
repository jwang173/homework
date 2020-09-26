import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  // templateUrl: './employee-list.component.html',
  template:`
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
    <h3>{{errorMsg}}</h3>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = []
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees =data
          ,
        error => {
          this.errorMsg = error;
        });

  }

}
