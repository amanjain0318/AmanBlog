import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Timestamp } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  about : About[]  = [];

  constructor(private http : HttpClient, private httpClient : HttpClient) {
   }

  getAboutMeList(): Observable<About[]> {
   return this.http.get<About[]>(`${environment.baseUrl}${'aboutMe/list'}`);
  }

  getTravelAlert(): Observable<trackAlert[]>{
      return this.http.get<trackAlert[]>("https://api.coronatracker.com/v1/travel-alert");
  }

}


export class trackAlert{
  countryCode? :string;         
  countryName? :string;   
  publishedDate? : any;      
  aboutMeDescription?: string;
  alertMessage? : string ;  
  }

export class About{
  aboutMeId? : number;         
  aboutMeCategory? :string;   
  aboutMeTitle? : string;      
  aboutMeDescription?:  string;
  aboutMeImagePath? : string ;  
  }
  
