import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { User } from '../login-register.service';
import { Project, ProjectService } from '../project.service';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  isDisabled = false;
  id!: number | 0;
  show : Boolean   = false;
   project   =  new Project ;
   @Input() user? : User;

  constructor(
    private formBuilder: FormBuilder,
    private projectService  : ProjectService,
    private toastr: ToastrService,
    private route : ActivatedRoute
  ) { }

  addProjectForm = this.formBuilder.group({
    projectName: [''],
    projectDescription: [''],
    projectLanguage: [''],
    projectLink: [''],
    projectTool: [''],
    projectImagePath: ['']
  });
  ngOnInit(): void {
    this.id  =  Number(this.route.snapshot.paramMap.get('id'));
    this.getProjectById(this.id);
 
  }
  addProject(): void{
    this.project  =  this.addProjectForm.value;
    if(!this.isDisabled){
    this.projectService.addProject(this.project).subscribe(
      data => {
        if(data !==null)
        {
        Swal.fire('Project added Successfully').then((result)=>{
            if (result.value)
            {
              this.addProjectForm.reset();
            }
        });
        //this.confirmBox();
        //alert('Project added Successfully');  
        //this.toastr.success('Project added Successfully', 'success');
        }
        else 
        Swal.fire("Error Occured", "warning");
        }
    );
   }else{
    this.projectService.updateProjectById(this.id, this.project).subscribe(
      (res) => {
        this.addProjectForm.reset();
        Swal.fire("Project Updated Successfully");
       // window.location.replace('/view-project'); 
    });
  }
}

getProjectById(id : number){ 
  debugger
  this.projectService.getProjectById(id).subscribe(data=>{
     this.addProjectForm =  this.formBuilder.group({
      projectName: [data.projectName],
      projectDescription: [data.projectDescription],
      projectLanguage: [data.projectLanguage],
      projectLink: [data.projectLink],
      projectTool: [data.projectTool],
      projectImagePath: [data.projectImagePath]          
    });
    this.isDisabled =  true;
  });
}

confirmBox(){
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
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
}

}

export class AddProject {
  constructor(
    projectId: number,
    projectName: string,
    projectDescription: string,
    projectLanguage: string,
    projectLink: string,
    projectTool: string,
    projectImagePath: string
  ) { }

  
  
}
