import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private router:Router){}
  currentUser=localStorage.getItem('session')
  searchItem: string = '';

  goToProductSearch() {
    this.router.navigate(['/products',this.searchItem]);

  }

  logout() {
    localStorage.removeItem('session');
    localStorage.removeItem('type');
    this.router.navigate(['']);
    }

}
