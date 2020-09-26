import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IEmployee } from './employee';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  //Observable.throw => throwError, .catch => .pipe(catchError)
  getEmployees():Observable<IEmployee[]> {
    return this.http
    .get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
    // return [
    //   {"id":1, "name":"Andrew", "age":30},
    //   {"id":2, "name":"Brandon", "age":25},
    //   {"id":3, "name":"Christina", "age":26},
    //   {"id":4, "name":"Elena", "age":28}
    // ];
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
    
  // postEmployees():Observable<IEmployee[]>
}
