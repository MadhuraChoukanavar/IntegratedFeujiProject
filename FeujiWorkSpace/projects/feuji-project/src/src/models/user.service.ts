import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8091';
  constructor(private http: HttpClient,private router: Router) {}

  login(userEmail: string, userPassword: string):Observable<User>{
    const body = { userEmail, userPassword };
    console.log(body)
    return this.http.post<User>(`${this.apiUrl}/api/users/login`,body)
  }
  logout() {
    this.router.navigate(['/login']);
  }

}