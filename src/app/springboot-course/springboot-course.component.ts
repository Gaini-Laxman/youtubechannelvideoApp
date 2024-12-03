import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-springboot-course',
  templateUrl: './springboot-course.component.html',
  styleUrls: ['./springboot-course.component.css']
})
export class SpringbootCourseComponent {
  constructor(private router: Router) {}

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
