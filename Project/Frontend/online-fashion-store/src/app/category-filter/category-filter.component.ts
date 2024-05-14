import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../models/cart';
import { Categories } from '../models/categories';
import { OfsServiceService } from '../ofs.service';
import { Products } from '../models/products';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css'
})
export class CategoryFilterComponent {
  category: Categories[];
  product: Products[];
  cart: Cart = new Cart();
  quant: number = 0;

  constructor(private service: OfsServiceService, private route: ActivatedRoute, private router: Router) { }


  catName = this.route.snapshot.params['name'];

  ngOnInit(): void {
    this.service.getCategories().subscribe((data: Categories[]) => {
      this.category = data;
      for (let i = 0; i < this.category.length; i++) {
        if (this.category[i].categoryName === this.catName) {
          this.product = this.category[i].products;
          break;
        }
      }
    });

  }

  onUpdateQuantity(event: Event) {
    this.quant = Number((<HTMLInputElement>event.target).value);

  }

  addToCart(id: number) {
    if (this.quant > 0 && this.quant <= 10) {
      let userName = localStorage.getItem('session');
      this.cart.quantity = this.quant;
      this.service.createCartItemByUser(userName, id, this.cart).subscribe(data => {
        console.log(data);
        alert(data);
        window.location.reload();
      });
    }
    else {
      alert("Please select quantity between 1 and 10");
    }
  }

}
