import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Output , EventEmitter, Input} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { About } from '../about-me.service';
import { header, HeaderService } from '../header.service';
import { User } from '../login-register.service';
import { Project } from '../project.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  @Input() title: string    = 'AmanBlog';
  @Output() public sidenavToggle =  new EventEmitter();
  public  menus: header[]  =  [];
  user?: User | null;
  about : About[]  = [];
  project : Project[]  = [];
  

  constructor(
    private httpClient : HttpClient,
    private headerService : HeaderService,
    private Pagetitle: Title,
    private SpinnerService: NgxSpinnerService
    ) { }

  
  ngOnInit(): void {
    this.getHeader();
    this.getUserSession();      
    this.Pagetitle.setTitle(this.title);
    
  }
  
  
  public onToggleSideNav =()=>{
    this.sidenavToggle.emit();
  }

  getHeader(): void{
     this.SpinnerService.show();  
     this.headerService.getHeader().subscribe(
      response => {
        this.menus   = response;
 });   
 setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.SpinnerService.hide();
}, 2000);
}

getUserSession(){
  this.headerService.getUserSession().subscribe(
      response => {
        this.user =  response?response: null;        
        console.log(this.user);
  });
}
} 


