import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ErrorPagesComponent } from './error-pages/error-pages.component'; 
import { MatToolbarModule } from '@angular/material/toolbar' ;
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule} from '@angular/material/list';
import { MatTableModule} from '@angular/material/table';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { User, LoginRegisterService } from './login-register.service';
import { ProjectComponent } from './project/project.component'; 
import { MatGridListModule } from "@angular/material/grid-list";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AdminViewMenuComponent } from './admin-view-menu/admin-view-menu.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddProjectComponent } from './add-project/add-project.component';
import { AdminViewProjectComponent } from './admin-view-project/admin-view-project.component';
import { ToastrModule } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner"; 
// const config = new SocialAuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider("875289048521-3aot36ro6sbqq3dcrp85m36r9dk966um.apps.googleusercontent.com")
//   }
// ]);
// export function provideConfig() {
//   return config;
// }
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeaderComponent,
    ErrorPagesComponent,
    SidenavComponent,
    LoginRegisterComponent,
    FooterComponent,
    ProjectComponent,
    ContactUsComponent,
    AboutMeComponent,
    AdminDashboardComponent,
    AddMenuComponent,
    AdminViewMenuComponent,
    AddProjectComponent,
    AdminViewProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatGridListModule,
    MatTableModule, 
    MatCarouselModule,
    MatPaginatorModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right'
    }),
    NgxSpinnerModule
    //SocialLoginModule
  ],
  providers: [
    User ,
   // SocialAuthServiceConfig,
    LoginRegisterService,
    Title

  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
