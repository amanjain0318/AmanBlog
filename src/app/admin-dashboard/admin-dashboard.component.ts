import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HeaderService } from '../header.service';
import { User } from '../login-register.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  position = new FormControl('before');
  @Output() user: User   = {};
  constructor( private httpClient : HttpClient,
    private router : Router,
    private headerService: HeaderService,
    ) { 

  }
  ngOnInit(): void {
    this.getUserSession();

  }

  logout(){
    
      this.httpClient.get<any>(`${environment.baseUrl}${'logout'}`).subscribe(
          res => {
            debugger
            console.log(res); 
            alert("User Logout Successfully");
            window.location.replace('');
            
     });  
  }

  getUserSession(){
    this.headerService.getUserSession().subscribe(
        response => {
          
          this.user =  response?response: {};   
          console.log("Admin"+this.user);
         
               
    });
  }

}
