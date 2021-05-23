import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeaderComponent } from './header/header.component';
import { ErrorPagesComponent } from './error-pages/error-pages.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ProjectComponent } from './project/project.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AdminViewMenuComponent } from './admin-view-menu/admin-view-menu.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AdminViewProjectComponent } from './admin-view-project/admin-view-project.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login/:id', component: LoginRegisterComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'contactUs', component: ContactUsComponent},
  { path: 'aboutMe', component: AboutMeComponent},
  { path: 'admin/dashboard', component: AdminDashboardComponent},  
  { path: 'add-menu', component: AddMenuComponent},
  { path: 'add-menu/:id', component: AddMenuComponent},
  { path: 'add-project', component: AddProjectComponent},
  { path: 'add-project/:id', component: AddProjectComponent},
  { path: 'view-project', component: AdminViewProjectComponent},
  { path: 'view-menu', component: AdminViewMenuComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '**', component: ErrorPagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
