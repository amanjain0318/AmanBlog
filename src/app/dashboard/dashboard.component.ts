import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { About, AboutMeService } from '../about-me.service';
import { header, HeaderService } from '../header.service';
import { hero } from '../hero';
import { HeroService } from '../hero.service';
import { User } from '../login-register.service';
import { Project, ProjectService } from '../project.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: hero[] = [];
  about: About[] = [];
  public  menus: header[]  =  [];
  project: Project[] = [];
  user: User  =  {};
  maxlength =  10;
  trimStart = 1;
  trimLength = 1;

  slides = [
    { 'image': 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e', p:"This is my first text " },
    { 'image': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23' , p:"This is my Second text "},
    { 'image': 'https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129', p:"This is my third text " },
    { 'image': 'https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6', p:"This is my fourth text " }
  ];
  constructor(
    private heroService: HeroService,
    private aboutService: AboutMeService,
    private projectService: ProjectService,
    private http: HttpClient, 
    private httpClient: HttpClient,
    private headerService: HeaderService
    ) {
  }
  ngOnInit() {
    this.getHeroes();
    this.getAboutList();
    this.getProjectList();
    this.getUserDeatils();
    this.getHeader();
  }
  getHeader(): void{
    this.headerService.getHeader().subscribe(
     response => {
       this.menus   = response;
  });   
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
    console.log(this.heroes);
  }

  getAboutList(){
    // this.about  =  this.aboutService.getAboutMeList();
    // console.log(this.about);
    this.aboutService.getAboutMeList().subscribe(
      response => {
        this.about = response ? response : [];
        //this.about  =this.aboutService.getAboutMeList();
      });
  }

  getProjectList(): void {
    // this.project = this.projectService.getProjectList();
    // console.log(this.project);
      this.projectService.getProjectList().subscribe(
      response => {
        this.project = response ? response : [];
  });
}


getUserDeatils(){
  this.headerService.getUserDetails().subscribe(
    data => {
      this.user  =  data?data:{};
    }
  );
}

}
