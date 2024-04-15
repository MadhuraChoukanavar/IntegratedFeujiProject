import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";
import { Employee } from "./employee.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient,private router: Router) {}

  // login(email: string, password: string):Observable<any>{
  //   const body = { email, password };
  //   return this.http.post(`${this.apiUrl}/users/login`,body)
  // }
login(email: string, password: string):Observable<any>{
    const body = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }).append('No-AUTH', 'True'); // Append authentication headers
   
    return this.http.post(`${this.apiUrl}/users/login`,body,{ headers: headers })   .pipe(
           tap(data => console.log("login", data)) // Logging the response data
          ); 
  }
 
  logout() {
    this.router.navigate(['/login']);
  }

  getEmployeeByid(userEmpid:any): Observable<Employee> {
    const url = `${this.apiUrl}/employee/${userEmpid}`;
    console.log("Request URL:", url);
    console.log(userEmpid+"service employee id");
    return this.http.get<Employee>(url);
  }

}