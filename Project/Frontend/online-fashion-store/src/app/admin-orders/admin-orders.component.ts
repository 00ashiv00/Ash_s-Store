import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OfsServiceService } from '../ofs.service';
import { Orders } from '../orders';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.css'
})
export class AdminOrdersComponent {

  constructor(private service:OfsServiceService,private router:Router){}

  orders:Orders[]=[];

  ngOnInit():void{
  this.service.getOrders().subscribe((data:Orders[])=>
    {
      this.orders=data;
    }
  )
  }

  updateOrder(id){
    this.router.navigate(['/admin/orders/update',id]);

  }
}
