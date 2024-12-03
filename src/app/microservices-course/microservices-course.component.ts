import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-microservices-course',
  templateUrl: './microservices-course.component.html',
  styleUrls: ['./microservices-course.component.css']
})
export class MicroservicesCourseComponent {
  constructor(private router: Router) {}

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
