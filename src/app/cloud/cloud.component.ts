import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrl: './cloud.component.css'
})

export class CloudComponent {

  constructor(private router: Router) {}

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

}
