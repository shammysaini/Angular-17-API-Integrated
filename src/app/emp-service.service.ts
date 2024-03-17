import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';



@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

   getUrl:string = "http://localhost:9090/employee";
   saveUrl:string = "http://localhost:9090/save";
   updateUrl:string = "http://localhost:9090/employee/update";
   deleteUrl:string = "http://localhost:9090/employee/delete";

  constructor(private http: HttpClient) {
    
  }

  fetchRecord():Observable<Employee[]>{

    return this.http.get<Employee[]>(this.getUrl);
  }

  findRecord(id:number):Observable<any>{
    console.log("url is ....",(`${this.getUrl}/${id}`))
    return this.http.get<any>(`${this.getUrl}/${id}`);
  }

  saveEmployee(data:any):Observable<any>{

    return this.http.post(this.saveUrl,data);
  }

  updateEmployee(id:number,data:Employee):Observable<any>{
    console.log("url is ....",(`${this.updateUrl}/${id}`))
    return this.http.post(`${this.updateUrl}/${id}`,data);
  }

  deleteEmployee(id:number):Observable<any>{

    return this.http.delete(`${this.deleteUrl}/${id}`);
  }
}
