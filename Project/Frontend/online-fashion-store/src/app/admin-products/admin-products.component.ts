import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OfsServiceService } from '../ofs.service';
import { Products } from '../products';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent {

  constructor(private service:OfsServiceService,private router:Router){}

  products:Products[]=[];

  ngOnInit():void{
    this.service.getProducts().subscribe((data:Products[])=>{
      console.log(data);
      this.products=data;
    })
  }

  updateProduct(id){
  this.router.navigate(['/admin/products/update',id])

  }

}
