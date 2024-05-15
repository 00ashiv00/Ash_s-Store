import { Component, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cart } from '../models/cart';
import { Products } from '../models/products';
import { OfsServiceService } from '../ofs.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent {

  allProducts: Products[] = [];
  searchList: Products[] = [];
  cart: Cart = new Cart();
  quant: number = 0;
  searchItem: string = '';

  constructor(private route: ActivatedRoute, private service: OfsServiceService) { }


  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.searchList=[];
      this.searchItem=params['name'];
      this.service.getProducts().subscribe((data: Products[]) => {
        this.allProducts = data;
        for (let item of this.allProducts) {
          if (item.productName.toLowerCase().includes(this.searchItem.toLowerCase())) {
            this.searchList.push(item);
          }
        }
      })
    })
    
    
  }


  addToCart(id: number) {
    if (this.quant > 0 && this.quant <= 10) {
      let userName = localStorage.getItem('session');
      this.cart.quantity = this.quant;
      this.service.createCartItemByUser(userName, id, this.cart).subscribe(data => {
        console.log(data);
        alert(data);
        window.location.reload();
      })
    }
    else {
      alert("Please select quantity between 1 and 10");
    }
  }


  onUpdateQuantity(event: Event) {
    this.quant = Number((<HTMLInputElement>event.target).value);

  }



}
