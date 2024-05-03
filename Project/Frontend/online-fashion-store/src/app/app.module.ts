import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { AdminComponent } from './admin/admin.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { AdminCreateProductComponent } from './admin-create-product/admin-create-product.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { AdminUpdateOrderComponent } from './admin-update-order/admin-update-order.component';
import { ErrorComponent } from './error/error.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    OrdersComponent,
    OrderDetailsComponent,
    ProductsComponent,
    CartComponent,
    UsersComponent,
    CategoriesComponent,
    AdminComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    CategoryFilterComponent,
    AdminCreateProductComponent,
    AdminUpdateProductComponent,
    AdminUpdateOrderComponent,
    ErrorComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
