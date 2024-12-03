import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-java-course',
  templateUrl: './java-course.component.html',
  styleUrls: ['./java-course.component.css']
})
export class JavaCourseComponent {
  courseTitle = 'Java Course';

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/java.pdf';
    link.download = 'java.pdf';
    link.click();
  }

  constructor(private router: Router) {}

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

}
