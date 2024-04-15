
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accountproject } from './accountproject.model';

@Injectable({
  providedIn: 'root'
})
export class AccountprojectService {

 
  private apiUrl = 'http://localhost:8083'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAccountProjects():Observable<Accountproject[]>{
    return this.http.get<Accountproject[]>(`${this.apiUrl}/accountproject/getAllAccountProjects`); //=============

   }

  saveAccountProject(projectData: Accountproject): Observable<Accountproject> {
    const headers = {'content-type':'application/json'};
    console.log(projectData+"service method");
    return this.http.post<Accountproject>(`http://localhost:8083/api/accountProjects/save`, projectData,{headers});
  }

  getAccountName():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/api/accountProjects/getaccount`);
  }

  getEmployeeName():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/api/accountProjects/getEmployee`);
  }



}
 