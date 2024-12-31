import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { CssCourseComponent } from './css-course/css-course.component';
import { AngularCourseComponent } from './angular-course/angular-course.component';
import { SpringCourseComponent } from './spring-course/spring-course.component';
import { SpringbootCourseComponent } from './springboot-course/springboot-course.component';
import { MicroservicesCourseComponent } from './microservices-course/microservices-course.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { VideosComponent } from './videos/videos.component';
import { DatabaseComponent } from './database/database.component';
import { CloudComponent } from './cloud/cloud.component';
import { ReactJsComponent } from './react-js/react-js.component';

@NgModule({
  declarations: [
    AppComponent,
    SafeUrlPipe,
    CssCourseComponent,
    AngularCourseComponent,
    SpringCourseComponent,
    SpringbootCourseComponent,
    MicroservicesCourseComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    VideosComponent,
    DatabaseComponent,
    CloudComponent,
    ReactJsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
