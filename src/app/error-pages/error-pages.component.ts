import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-pages',
  templateUrl: './error-pages.component.html',
  styleUrls: ['./error-pages.component.css']
})
export class ErrorPagesComponent implements OnInit {

  constructor() { }
  public error_message  =  '404 Page not Found';
  ngOnInit(): void {
  }

}
