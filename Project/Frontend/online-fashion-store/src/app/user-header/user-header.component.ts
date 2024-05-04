import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent {
constructor(private router:Router){}

  logout() {
    localStorage.removeItem('session');
    localStorage.removeItem('type');
    this.router.navigate(['']);
    }

}
