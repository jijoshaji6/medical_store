import { HttpClient,HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http:HttpClient) { }
  private getHeaders():HttpHeaders{
    const token=localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    });
  }

  getAllMedicine():Observable<Medicine[]>{
    const headers = this.getHeaders();
    return this.http.get<Medicine[]>(
      'https://medicalstore.mashupstack.com/api/medicine',{headers}
    )
  }
  getMedicine(id:string):Observable<Medicine>{
    const headers = this.getHeaders();
    return this.http.get<Medicine>(
      `https://medicalstore.mashupstack.com/api/medicine/${id}`,{headers}
    );
  }
  deleteMedicine(id:any):Observable<Medicine>{
    const headers = this.getHeaders();
    return this.http.delete<Medicine>(
      `https://medicalstore.mashupstack.com/api/medicine/${id}`,{headers}
    )
  }
  createMedicine(medicine:any):Observable<Medicine>{
    const headers = this.getHeaders();
    return this.http.post<Medicine>(
      'https://medicalstore.mashupstack.com/api/medicine',medicine,{headers}
    )
  }
  editMedicine(id:any,medicine:any):Observable<Medicine>{
    const headers = this.getHeaders();
    return this.http.post<Medicine>(
      `https://medicalstore.mashupstack.com/api/medicine/${id}`,medicine,{headers}
    )
  }
  searchMedicine(keyword: string): Observable<Medicine[]> {
    const headers = this.getHeaders();
    return this.http.get<Medicine[]>(
      `https://medicalstore.mashupstack.com/api/medicine/search?keyword=${keyword}`, { headers }
    );
  }
}
