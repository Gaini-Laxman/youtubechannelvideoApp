import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-react-js',
  templateUrl: './react-js.component.html',
  styleUrl: './react-js.component.css'
})
export class ReactJsComponent {
constructor(private router: Router) {}

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

}
