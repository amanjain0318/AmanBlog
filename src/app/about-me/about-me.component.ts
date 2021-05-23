import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { About, AboutMeService, trackAlert } from '../about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  public about : About[] = [];
  trackAlert1  : trackAlert[]  =  [];  
  displayedColumns: string[] = ['SNO','CountryCode', 'CountryName', 'Published Date', 'Alert Message' ];
  dataSource: any;    
    constructor(private aboutService : AboutMeService) { }

  ngOnInit(): void {
    this.getAboutMeList();
    //this.getTravelAlert();
  }

  getAboutMeList(){
     this.aboutService.getAboutMeList().subscribe(
      response => {
        this.about =  response?response: [];    
        console.log( this.about);
        return this.about; 
  });
  }

  getTravelAlert(){
    this.aboutService.getTravelAlert().subscribe(
      response => {
        this.trackAlert1 =  response?response: [];    
        this.dataSource =new MatTableDataSource(response);
        console.log(this.trackAlert1);
        //this.dataSource =  response;
  });
  }
  

}