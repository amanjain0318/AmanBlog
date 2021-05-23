import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { header, HeaderService } from '../header.service';
import { LoginRegisterService } from '../login-register.service';


@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css'],
  providers: [LoginRegisterService]
})
export class AddMenuComponent implements OnInit {
  isDisabled = false;
  id!: number | 0;
  addMenuForm = this.formBuilder.group({
    menuName: [''],
    menuLink: ['']
    
  });

  public menus = new header(
    1, "A,am", "sssd"
  );

  constructor(private http: HttpClient,
    private router: Router,
    public route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private loginRegisterService: LoginRegisterService,
    private headerService : HeaderService 
  ){
  }
  ngOnInit(): void {
    this.id  =  Number(this.route.snapshot.paramMap.get('id'));
    this.getMenuById(this.id);
  }

  addMenu(): void {
    this.menus  =  this.addMenuForm.value;
    if(!this.isDisabled){
    this.headerService.addMenu(this.menus).subscribe(
      (res) => {
        alert("Menu Added Successfully");
        window.location.replace('/add-menu');
        //this.router.navigate(['/view-menu']);
    });
  }else{
    this.headerService.updateMenuById(this.id, this.menus).subscribe(
      (res) => {
        alert("Menu Updated Successfully");
        window.location.replace('/view-menu');
        //this.router.navigate(['/view-menu']);
    });
  }
  }

  getMenuById(id : number){
        this.headerService.getMenuById(id).subscribe(data=>{
           this.addMenuForm =  this.formBuilder.group({
            menuName: [data.menuName],
            menuLink: [data.menuLink]            
          });
          this.isDisabled =  true;
        });
  }
}