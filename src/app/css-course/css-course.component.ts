import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-css-course',
  templateUrl: './css-course.component.html',
  styleUrl: './css-course.component.css'
})
export class CssCourseComponent {
  constructor(private router: Router) {}

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
