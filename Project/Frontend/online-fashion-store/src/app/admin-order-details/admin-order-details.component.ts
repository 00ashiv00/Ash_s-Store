import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetails } from '../models/order-details';
import { OfsServiceService } from '../ofs.service';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrl: './admin-order-details.component.css'
})
export class AdminOrderDetailsComponent {

  orderId:number=0;
  orderDetails:OrderDetails[]=[];


  constructor(private route:ActivatedRoute,private service:OfsServiceService){}

  ngOnInit():void{
    this.orderId=this.route.snapshot.params['id'];
    this.service.getOrderDetails(this.orderId).subscribe((data:OrderDetails[])=>{
      console.log(data);
      this.orderDetails=data;
    });
    
  }

}
