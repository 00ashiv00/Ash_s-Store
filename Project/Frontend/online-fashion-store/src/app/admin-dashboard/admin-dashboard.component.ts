import { Component } from '@angular/core';
import { OfsServiceService } from '../ofs.service';
import { Orders } from '../orders';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  orders: Orders[] = [];

  constructor(private service: OfsServiceService) { }

  shippedOrders: number = 0;
  cancelledOrders: number = 0;
  deliveredOrders: number = 0;
  totalEarnings: number = 0;
  totalOrders: number = 0;
  placedOrders: number = 0;


  ngOnInit(): void {
    this.service.getOrders().subscribe((data: Orders[]) => {
      this.orders = data;

      this.totalOrders = this.orders.length;
      this.orders.forEach(element => {

        if(element.status != 'Cancelled'){
          this.totalEarnings+=element.totalAmount;
        }

        if (element.status === 'Cancelled') {
          this.cancelledOrders += 1;
        }
        else if (element.status === 'Shipped') {
          this.shippedOrders += 1;
        }
        else if (element.status === 'Placed') {
          this.placedOrders += 1;

        }
        else if (element.status === 'Delivered') {
          this.deliveredOrders += 1;

        }

      }
      )

    });

  }



}
