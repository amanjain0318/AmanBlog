import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatRow, MatRowDef, MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ProjectService, Project } from '../project.service';
import * as XLSX from "xlsx";

@Component({
  selector: 'app-admin-view-project',
  templateUrl: './admin-view-project.component.html',
  styleUrls: ['./admin-view-project.component.css']
})
export class AdminViewProjectComponent implements OnInit {
  
  getFileName = () => {
    let timeSpan = new Date().toISOString();
    let sheetName =  "ProjectList";
    let fileName = `${sheetName}-${timeSpan}`;
    return {
      sheetName,
      fileName
    };
  };

  public project: Project[] = [];
  displayedColumns: string[] = ['position', 'name', 'description', 'language', 'tool', 'link', 'image', 'action'];
  dataSource = new MatTableDataSource(['noData']);;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;


  constructor(private projectService: ProjectService, private httpClient: HttpClient,
    private http: HttpClient) { }

  ngOnInit(): void {

    this.dataSource.sort = this.sort;
    this.getProjectList();

  }
  getProjectList() {
    // this.project = this.projectService.getProjectList();
    this.httpClient.get<any>(`${environment.baseUrl}${'project/list'}`).subscribe(
      response => {
        console.log(response);
        this.dataSource = response;
        //this.dataSource.paginator = this.paginator;
      });
  }

  deleteProjectById(element: Project): void {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
          this.http.delete(`${environment.baseUrl}${'project/deleteProjectById/' + element.projectId}`).subscribe(
            (res) => {
              this.getProjectList();
            });
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
      console.log(result.value);
    })
  }
  applyFilterGlobal(eventString: any) {
    console.log(eventString);
    this.dataSource.filter = eventString.trim().toLowerCase();
  }
  exportTable() {
  let filename  =  this.exportTableToExcel("view-table");
    setTimeout(() => {
      Swal.fire(
        {title: "Project List Downloaded",
         html: "<h1><b>"+filename+"</b></h1>",
  confirmButtonText: "Ok"});
     
    }, 3000);
  }

  exportTableToExcel(tableId: string): string{
     let { sheetName, fileName } = this.getFileName();
     let targetTableElm = document.getElementById(tableId);
     let wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{
       sheet: sheetName
     });
     XLSX.writeFile(wb, `${fileName}.xlsx`);
     return fileName;
   }
}
