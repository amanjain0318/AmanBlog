
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer, LoginRegisterService } from '../login-register.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public customer : Customer = {};
  constructor(
    private router: Router,
    private formBuilder : FormBuilder,
    public route: ActivatedRoute,
    private notifyService: ToastrService,
    private loginRegisterService: LoginRegisterService
    ) { }

    contactForm = this.formBuilder.group({
      customerName: [''],
      customerEmail: [''],
      customerComment: ['']
    });

  ngOnInit(): void {
  }

  addClientComment(): void {
    this.customer  =  this.contactForm.value;
    this.loginRegisterService.addClientComment(this.customer)
        .subscribe( data => {
           if (data)
           {
            this.notifyService.success("Data shown successfully!!", "aman");
           
            this.router.navigate(['/contactUs']);
            this.contactForm.reset(); 
           }
           else{
             alert("Comment not Added"+ data);
           }

        });
}
}
