import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OfsServiceService } from '../ofs.service';
import { Orders } from '../models/orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders: Orders[];
  

  constructor(private service: OfsServiceService,private router:Router) { }

  ngOnInit(): void {
    let userName=localStorage.getItem('session');
    this.service.getOrdersByUserName(userName).subscribe((data: Orders[]) => {
      this.orders = data;
    });
  }


  goToOrderDetails(id:number){
    this.router.navigate(['order-details',id])
  }

  cancelOrder(id:number){
    this.service.cancelTheOrder(id).subscribe(data=>{
      console.log(data);
      alert(data);
      
    },error=>alert(error.error)
    );
    this.router.navigate(['homepage'])

  }

  logout() {
    localStorage.removeItem('session');
    localStorage.removeItem('type');
    this.router.navigate(['']);
    }
 

  
}
