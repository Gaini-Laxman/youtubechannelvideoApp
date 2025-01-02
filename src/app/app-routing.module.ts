import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JavaCourseComponent } from './java-course/java-course.component';
import { HtmlCourseComponent } from './html-course/html-course.component';
import { CssCourseComponent } from './css-course/css-course.component';
import { AngularCourseComponent } from './angular-course/angular-course.component';
import { SpringCourseComponent } from './spring-course/spring-course.component';
import { SpringbootCourseComponent } from './springboot-course/springboot-course.component';
import { MicroservicesCourseComponent } from './microservices-course/microservices-course.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { VideosComponent } from './videos/videos.component';
import { CloudComponent } from './cloud/cloud.component';
import { DatabaseComponent } from './database/database.component';
import { ReactJsComponent } from './react-js/react-js.component';
import { PythonComponent } from './python/python.component';
import { FlaskComponent } from './flask/flask.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'courses/java', component: JavaCourseComponent },
  { path: 'courses/html', component: HtmlCourseComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'courses/css', component: CssCourseComponent },
  { path: 'courses/angular', component: AngularCourseComponent },
  { path: 'courses/spring', component: SpringCourseComponent },
  { path: 'courses/springboot', component: SpringbootCourseComponent },
  { path: 'courses/cloud', component: CloudComponent },
  { path: 'courses/database', component: DatabaseComponent },
  { path: 'courses/reactJs', component: ReactJsComponent },
  { path: 'courses/python', component: PythonComponent },
  { path: 'courses/flask', component : FlaskComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses/microservices', component: MicroservicesCourseComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
