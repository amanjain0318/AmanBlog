import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { header, HeaderService } from '../header.service';
import { User } from '../login-register.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  menus: header []  =  [] ;
  user : User  = {};
  Loginuser?: User  | null;
  constructor(private headerService : HeaderService, 
    private httpClient : HttpClient ) { }

  ngOnInit(): void {
    this.getHeader();
    this.getUserDeatils();
    this.getUserSession();
  }
  getHeader(){
    this.headerService.getHeader().subscribe(
      data=>{ 
        this.menus =  data;
    });
  }
  getUserDeatils(){
    this.headerService.getUserDetails().subscribe(
      data => {
        this.user  =  data;
      }
    );
  }
  getUserSession(){
    this.headerService.getUserSession().subscribe(
        response => {
          this.Loginuser =  response?response: null;        
    });
  }
}
