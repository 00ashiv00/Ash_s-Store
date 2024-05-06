import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfsServiceService } from '../ofs.service';
import { Orders } from '../models/orders';
import { User } from '../models/user';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-admin-update-order',
  templateUrl: './admin-update-order.component.html',
  styleUrl: './admin-update-order.component.css'
})
export class AdminUpdateOrderComponent {
  orders:Orders[]=[];

  order:Orders=new Orders();
 
  id:number;

  constructor(private service:OfsServiceService,private route:ActivatedRoute,private goRouter:Router){}

  

  ngOnInit():void{
    this.service.getOrders().subscribe((data:Orders[])=>{
      this.orders=data;
      console.log(data);
      this.id=this.route.snapshot.params['id'];

    for(let i=0;i<this.orders.length;i++){
      if(this.orders[i].orderId==this.id){
        this.order=this.orders[i];
      }
    } 
  }
)}


updateTheOrder(){
  this.service.UpdateOrder(this.order,this.order.orderId).subscribe(data=>{
    console.log(data);
    alert('Order Status Updated.');
  })

  setTimeout(() => {
    this.goRouter.navigate(['/admin/orders']);
  }, 1000);

}

}
      
      
      

  
   
  





