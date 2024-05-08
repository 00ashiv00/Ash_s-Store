import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../models/cart';
import { OfsServiceService } from '../ofs.service';
import { Products } from '../models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
products: Products[];
cart:Cart=new Cart();
quant:number=0;

constructor(private service: OfsServiceService,private router:Router) { }

  
  
  ngOnInit(): void {
    this.service.getProducts().subscribe((data: Products[]) => {
      this.products = data;
      console.log(data);
    });
  }

    
  
  addToCart(id:number){
    if (this.quant>0&&this.quant<=10){
    let userName=localStorage.getItem('session');
    this.cart.quantity=this.quant;
    this.service.createCartItemByUser(userName,id,this.cart).subscribe(data=>{
      console.log(data);
      alert(data);
    },error=>console.log(error));
  }
  else{
    alert("Please select quantity between 1 and 10");
  }
  }


  onUpdateQuantity($event:Event){
    this.quant=Number((<HTMLInputElement>event.target).value);
    
  }

  logout() {
    localStorage.removeItem('session');
    localStorage.removeItem('type');
    this.router.navigate(['']);
    }

  


}
