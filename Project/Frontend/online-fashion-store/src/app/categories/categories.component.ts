import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from '../categories';
import { OfsServiceService } from '../ofs.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  constructor(private service:OfsServiceService,private router:Router){}

  categories:Categories[];

  ngOnInit():void{
    this.service.getCategories().subscribe((data:Categories[])=>{
      this.categories=data;
    })
  }

  logout() {
    localStorage.removeItem('session');
    localStorage.removeItem('type');
    this.router.navigate(['']);
    }
}
