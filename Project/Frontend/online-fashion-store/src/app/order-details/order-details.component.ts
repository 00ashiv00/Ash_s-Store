import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfsServiceService } from '../ofs.service';
import { OrderDetails } from '../models/order-details';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {
  orderDetails: OrderDetails[];
  id:number;

  constructor(private service: OfsServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getOrderDetails(this.id).subscribe((data: OrderDetails[]) => {
      console.log(data);
      this.orderDetails = data;  
    });


  }

  logout() {
    localStorage.removeItem('session');
    localStorage.removeItem('type');
    this.router.navigate(['']);
    }
 
    

  }

