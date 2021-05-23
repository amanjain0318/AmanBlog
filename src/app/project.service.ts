import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  project: Project[] = [];
  constructor(private http: HttpClient, private httpClient: HttpClient) { }

  addProject(project: Project) {
    return this.http.post<Project>(`${environment.baseUrl}${'project/add'}`, project);
  }
  getProjectList(): Observable<Project[]> {
     return this.httpClient.get<Project[]>(`${environment.baseUrl}${'project/list'}`);
  }
  
  updateProjectById(id : number , project: Project) {
    return this.http.put<Project>(`${environment.baseUrl}${'project/updateProjectById/'+id}`, project);
  }
  getProjectById(id : number): Observable<Project> {
    return this.http.get<Project>(`${environment.baseUrl}${'project/getProjectById/'+id}`);
  }
}
export interface ProjectInterface {
  projectId: number;
  projectName: string;
  projectDescription: string;
  projectLanguage: string;
  projectTool: string;
  projectLink: string;
  projectImagePath: string;
}

export class Project implements ProjectInterface {
  projectId!: number;
  projectName!: string;
  projectDescription!: string;
  projectLanguage!: string;
  projectTool!: string;
  projectLink!: string;
  projectImagePath!: string;

  constuctor(

  ) { }
}
