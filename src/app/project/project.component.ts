import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
public project: Project[] = [];
  constructor(private http: HttpClient, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjectList();
  }

  getProjectList(): void{
    this.projectService.getProjectList().subscribe(
      response => {
        this.project = response ? response : [];
      });
  }

}
