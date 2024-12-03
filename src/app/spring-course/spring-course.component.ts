import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spring-course',
  templateUrl: './spring-course.component.html',
  styleUrl: './spring-course.component.css'
})
export class SpringCourseComponent {
  constructor(private router: Router) {}

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
