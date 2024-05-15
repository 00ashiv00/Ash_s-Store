import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent {

  searchItem: string = '';

  constructor(private router: Router) { }


  goToProductSearch() {
    this.router.navigate(['/products',this.searchItem]);

  }

  logout() {
    localStorage.removeItem('session');
    localStorage.removeItem('type');
    this.router.navigate(['']);
  }

}
