import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn:boolean=true;
  constructor(private http: HttpClient) { }

  private getHeaders():HttpHeaders{
    const token=localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`,
    });
  }

  register(user:any):Observable<any>{
    return this.http.post<any>(
      'https://medicalstore.mashupstack.com/api/register',user
    )
  }

  login(credentials:any):Observable<any>{
    this.isLoggedIn=true;
    return this.http.post<any>(
      'https://medicalstore.mashupstack.com/api/login',credentials
    )
  }

  logout(){
    const headers=this.getHeaders();
    localStorage.removeItem('token');
    this.isLoggedIn=false;
    return this.http.post(
      'https://medicalstore.mashupstack.com/api/logout',{headers});
  }

  isLogedIn():boolean{
    return this.isLoggedIn;
  }
}
