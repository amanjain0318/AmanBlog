import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './login-register.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  menus: header[]  =  [];

  constructor(
    private http : HttpClient
  ) { }

  getHeader(): Observable<header[]>{
    console.log(`${environment.baseUrl}${'dashboard'}`);
    return this.http.get<header[]>(`${environment.baseUrl}${'dashboard'}`);
  }
  getUserSession():  Observable<User> {
    return this.http.get<any>(`${environment.baseUrl}${'isLogin'}`);
  }
  getUserDetails():  Observable<User> {
    return this.http.get<any>(`${environment.baseUrl}${'userDetail'}`);
  }
  addMenu(menus: header):  Observable<header> { 
    return this.http.post<header>(`${environment.baseUrl}${'addHeader'}`, menus);
  }
  updateMenuById(id : number , menus: header) {
    return this.http.put<header>(`${environment.baseUrl}${'updateHeaderById/'+id}`, menus);
  }
  getMenuById(id : number): Observable<header> {
    return this.http.get<header>(`${environment.baseUrl}${'getHeaderById/'+id}`);
  }
}

export class header{
  constructor(
  public menuId: number,
  public menuName:string,
  public menuLink: string
  ){
  }
}