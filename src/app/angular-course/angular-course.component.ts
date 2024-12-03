import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular-course',
  templateUrl: './angular-course.component.html',
  styleUrls: ['./angular-course.component.css']  // Ensure the correct file path
})
export class AngularCourseComponent {
  constructor(private router: Router) {}

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
