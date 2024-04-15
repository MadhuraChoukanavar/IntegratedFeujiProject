import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {

  private apiUrl = 'http://localhost:8081/api'; 

  constructor(private http: HttpClient) {}

  getAccount():Observable<Account[]>{
    return this.http.get<Account[]>(`${this.apiUrl}/accountSave`); 

    }
    getById(id:any):Observable<any[]>{
      // alert(cate);
      return this.http.get<any[]>(`${this.apiUrl}/accountSave/getbyId/${id}`)
  
    }
   
  saveAccount(accountData: Account): Observable<Account> {
    return this.http.post<Account>(`${this.apiUrl}/accountSave/save`, accountData);
  }
}
