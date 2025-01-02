import { Component } from '@angular/core';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrl: './python.component.css'
})
export class PythonComponent {
  alert(message: string): void {

    window.alert(message);

  }

  navigateToRegister(): void {

    // Add your navigation logic here

    console.log('Navigating to register page...');

  }
}
