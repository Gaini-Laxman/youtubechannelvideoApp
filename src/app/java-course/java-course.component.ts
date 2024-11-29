import { Component } from '@angular/core';

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
}
