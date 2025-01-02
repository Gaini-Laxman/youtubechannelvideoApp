import { Component } from '@angular/core';

@Component({
  selector: 'app-flask',
  templateUrl: './flask.component.html',
  styleUrl: './flask.component.css'
})
export class FlaskComponent {
  name: string = '';



  navigateToRegister() {

    // Add your navigation logic here

    console.log('Navigating to register page...');

  }
}
