import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OfsServiceService } from '../ofs.service';
import { Orders } from '../models/orders';
import { User } from '../models/user';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.css'
})
export class AdminOrdersComponent {
  
  constructor(private service:OfsServiceService,private router:Router){
    this.service.getUsers().subscribe((data:User[])=>{
      console.log(data);
      this.users=data;
    })
  }
  
  userName: string;
  orders:Orders[]=[];
  users:User[]=[];
  userId:number=0;

  ngOnInit():void{
  this.service.getOrders().subscribe((data:Orders[])=>
    {
      console.log(data);
      this.orders=data;
    }
  )
  }

  getUserId(id){
    for(let item of this.users){
      for(let order of item.orders){
        if(order.orderId===id){
          this.userId=item.userId;
        }
      }
    }
    return this.userId;

  }

  getUserName(id){
    for(let item of this.users){
      for(let order of item.orders){
        if(order.orderId===id){
          this.userName=item.fullName;
        }
      }
    }
    return this.userName;

  }

  updateOrder(id){
    this.router.navigate(['/admin/orders/update',id]);
  }

  goToOrderDetails(id:number){
    this.router.navigate(['/admin/orders/order-details',id]);
  }
}
