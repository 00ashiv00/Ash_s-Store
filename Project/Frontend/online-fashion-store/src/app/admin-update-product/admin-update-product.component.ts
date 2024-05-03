import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfsServiceService } from '../ofs-service.service';
import { Products } from '../products';

@Component({
  selector: 'app-admin-update-product',
  templateUrl: './admin-update-product.component.html',
  styleUrl: './admin-update-product.component.css'
})
export class AdminUpdateProductComponent {

  products: Products[]=[];
  prod:Products=new Products();
  id:number;


  constructor(private service:OfsServiceService,private route:ActivatedRoute,private goRouter:Router){}

  ngOnInit():void{
    this.service.getProducts().subscribe((data:Products[])=>{
      this.products=data;
      console.log(data);
      this.id=this.route.snapshot.params['id'];

    for(let i=0;i<this.products.length;i++){
      if(this.products[i].productId==this.id){
        this.prod=this.products[i];

      }
    }
    
  }

    )}

    updateTheProduct(){
      this.service.UpdateProduct(this.prod).subscribe(data=>{
        console.log(data);
        alert('Product Updated.')
      })

      setTimeout(() => {
        this.goRouter.navigate(['/admin/products']);
      }, 1000);

    }

    deleteTheProduct() {
      this.service.deleteProduct(this.prod.productId).subscribe(data=>{
        console.log(data);
        alert('Product Deleted.');
      })

      setTimeout(() => {
        this.goRouter.navigate(['/admin/products']);
      }, 1000);
      }


}