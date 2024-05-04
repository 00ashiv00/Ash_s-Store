import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { OfsServiceService } from '../ofs.service';
import { Products } from '../products';

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
    let userName=localStorage.getItem('session');
    this.cart.quantity=this.quant;
    this.service.createCartItemByUser(userName,id,this.cart).subscribe(data=>{
      console.log(data);
      alert(data);
    });
    
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
