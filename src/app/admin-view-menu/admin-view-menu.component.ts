import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { header, HeaderService } from '../header.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-admin-view-menu',
  templateUrl: './admin-view-menu.component.html',
  styleUrls: ['./admin-view-menu.component.css']
})
export class AdminViewMenuComponent implements OnInit {
  status: any;
  [x: string]: any;
  menus: header[]  =  [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', ];
  dataSource =new MatTableDataSource(['noData']);

  constructor(private httpClient: HttpClient,
    private headerService :HeaderService) {
    
  }

  ngOnInit() {
    this.getHeader();
  }
  
  getHeader(){
    //this.headerService.getHeader()
    this.httpClient.get<any>(`${environment.baseUrl}${'dashboard'}`).subscribe(
        response => {
          console.log(response);
          this.dataSource=  response; 
         
   });  

}
deleteMenuById(element: header): void{
  this.httpClient.delete(`${environment.baseUrl}${'deleteHeaderById/'+element.menuId}`).subscribe(
    (res)=> {
      alert("menu is deleted") ;
      window.location.replace('/view-menu');
      this.getHeader();
     
});    
}

updateMenuById(element : header){
  this.headerService.updateMenuById(element.menuId, element).subscribe(
    (res)=> {
      alert("menu is Updated") ;
      window.location.replace('/view-menu');
      this.getHeader();
     
});  
}
  
}
