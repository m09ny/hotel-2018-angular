import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import {DataTableModule} from 'primeng/datatable';

import { appRoutes } from './app.routing';
import { environment } from '../environments/environment';

import { AuthGuard } from './_guards/auth.guard';

import { ColledgeData } from './_data/colledge.data';

import { AuthenticateService } from './_services/login.service';
import { CourseService } from './_services/courses.service';
import { TeacherService } from './_services/teachers.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { TeachersComponent } from './pages/teachers/teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    CoursesComponent,
    TeachersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ColledgeData),
    RouterModule.forRoot(appRoutes),
    DataTableModule
  ],
  providers: [AuthGuard, AuthenticateService, CourseService, TeacherService],
  bootstrap: [AppComponent],
  exports: [HomeComponent, ContactComponent, LoginComponent, CoursesComponent, TeachersComponent]
})
export class AppModule { }