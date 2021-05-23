import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { header, HeaderService } from '../header.service';
import { LoginRegisterService, User } from '../login-register.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  // constructor() { }
  public id : any;
  menu : header[] = [];  

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private loginRegisterService: LoginRegisterService,
    private headerService : HeaderService,
    public user: User
    ){
      this.id =this.route.snapshot.paramMap.get('id')?Number(this.route.snapshot.paramMap.get('id')): 1 ; //get id parameter
}

  ngOnInit(): void {
  }
 
  loginUser(): void {
    this.loginRegisterService.loginUser(this.user)
        .subscribe( data => {
          if (data)
            {
              alert("User Login Successfully");
              this.user =  data;
              window.location.replace('dashboard');
              //this.router.navigate(['dashboard']);
              //window.location.reload(); 
              // this.router.navigateByUrl('/', { skipLocationChange: false })
              //                           .then(() => this.router.navigate(['/dashboard'],
              //                               { skipLocationChange: false }));
           }
            else{
              alert("Invalid User Email or Password");
            }

        });


}

}
