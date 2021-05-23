import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from "@angular/common/http";
import { header } from './header.service';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(private http : HttpClient) { }

  public loginUser(user: User) {
    return this.http.post<User>(`${environment.baseUrl}${'login'}`, user);
  }


public addClientComment(customer: Customer) {

  return this.http.post<Customer>(`${environment.baseUrl}${'customer/addComment'}`, customer);
}

public addMenu(menu: header ) {
  return this.http.post<header>(`${environment.baseUrl}${'addHeader'}`, header);
}

}

export class User{
  userId?: number;
  userEmail?: string;
  userName?: string;
  userPassword?: string;
  userSession?: string;
  userDesignation?: string;
  userFbLink?: string;
  userLkdinLink?: string;
  userGitLink?: string;
  userImagePath?: string;

}
export class Customer{
  customerId?: number;
  customerName?: string;
  customerEmail?: string;
  customerComment?: string;

}