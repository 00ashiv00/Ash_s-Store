import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../models/cart';
import { OfsServiceService } from '../ofs.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {


  cart: Cart[] = [];
  totalPrice: number = 0;


  // cartItems:number;

  constructor(private service: OfsServiceService, private router: Router) { }


  ngOnInit(): void {
    let userName = localStorage.getItem('session')
    this.service.getCartByUser(userName).subscribe((data: Cart[]) => {
      console.log(data);

      this.cart = data;
      // this.cartItems=this.cart.length;

      for (let i = 0; i < this.cart.length; i++) {
        this.totalPrice += (this.cart[i].quantity * this.cart[i].products.price)

      }

    });
  }


  newOrder() {
    let userName = localStorage.getItem('session')
    this.service.createOrderByUser(this.cart, userName).subscribe(data => {
      console.log(data);
      alert(data);
    });

    setTimeout(() => {
      this.router.navigate(['/orders']);
    }, 1000);

  }

  removeItem(cartId: number) {
    this.service.removeCartItem(cartId).subscribe(data => {
      console.log(data);
      alert('Item Removed from cart');
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);

  }




}
