import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-html-course',
  templateUrl: './html-course.component.html',
  styleUrl: './html-course.component.css'
})
export class HtmlCourseComponent {
  constructor(private router: Router) {}

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
