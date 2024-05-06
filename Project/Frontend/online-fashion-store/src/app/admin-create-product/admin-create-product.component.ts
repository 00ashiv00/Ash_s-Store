import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfsServiceService } from '../ofs.service';
import { Products } from '../models/products';

@Component({
  selector: 'app-admin-create-product',
  templateUrl: './admin-create-product.component.html',
  styleUrl: './admin-create-product.component.css'
})
export class AdminCreateProductComponent {

  categroryId:number;
  product:Products=new Products();


  form = new FormGroup({
    productName: new FormControl('', Validators.required),
    productPrice: new FormControl('', Validators.required),
    productAvailability: new FormControl('', Validators.required),
    productDescription: new FormControl('', Validators.required),
    catId: new FormControl('', Validators.required),
    imageLink: new FormControl('', Validators.required),

  });



  constructor(private service:OfsServiceService,private router:Router){}

onSubmit() {
  this.service.createNewProduct(this.categroryId,this.product).subscribe(data=>{
    console.log(data);
    alert('New Product Added to Catalogue.')
  })

  setTimeout(() => {
    this.router.navigate(['/admin/products']);
  }, 1000);
  
}
  

}
