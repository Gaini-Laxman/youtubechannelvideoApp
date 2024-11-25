import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'youtubechannelapi';
  videos = [
    { 
      videoId: 'Su2eUTLR984', 
      title: 'Java Introduction'
    },
    { 
      videoId: 'WlVCG4wqhpk', 
      title: 'Java Programs Development'
    },
    {
      videoId: 'QswFHYgdFk8',
      title: 'Variables, Data Types, Identifiers & Rules'
    },
    {
      videoId: 'rYPEfz1c0ec',
      title: 'Reserved keyWords, Java Coding Standards, Java comments, Reading Data From keyboards'
    },
    {
      videoId: 'vC0xywgc9Yk',
      title: 'Operators, Arithmetic, Relational, Logical Assignment'
    },
    {
      videoId: 'k9Gmkt0QxIQ',
      title: 'Operators, Arithmetic, Relational, Logical Assignment'
    },
      {
        videoId: 'qCtcCAa8TmM',
        title: 'Operators, Arithmetic, Relational, Logical Assignment'
      },
      {
        videoId: 'F2aOWwSCnYc',
        title: ' Arrays, String, StringBuffer, StringBuffer'
      },
      {
        videoId: 'y7W9Q3OwGvQ',
        title: ' Arrays, String, StringBuffer, StringBuffer'
      }
    
  ];
}
