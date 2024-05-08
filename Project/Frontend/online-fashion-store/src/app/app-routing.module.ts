import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminAuthGuard } from './admin-auth.guard';
import { AdminCreateProductComponent } from './admin-create-product/admin-create-product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOrderDetailsComponent } from './admin-order-details/admin-order-details.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminUpdateOrderComponent } from './admin-update-order/admin-update-order.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { userAuthGuard } from './user-auth.guard';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'homepage',canActivate:[userAuthGuard],component: HomepageComponent },
  { path: 'orders', canActivate:[userAuthGuard],component: OrdersComponent },
  { path: 'order-details/:id',canActivate:[userAuthGuard], component: OrderDetailsComponent },
  { path: 'products',canActivate:[userAuthGuard], component: ProductsComponent },
  { path: 'cart',canActivate:[userAuthGuard], component: CartComponent },
  { path: 'user-details',canActivate:[userAuthGuard], component: UserDetailsComponent },
  { path: 'sign-up', component: UsersComponent },
  { path: 'categories', canActivate:[userAuthGuard],component: CategoriesComponent },
  { path: 'categories/:name', canActivate:[userAuthGuard],component: CategoryFilterComponent },
  {
    path: 'admin', canActivate:[adminAuthGuard], component: AdminComponent, children:
      [{ path: 'orders', component: AdminOrdersComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'products', component: AdminProductsComponent },
      { path: 'products/add', component: AdminCreateProductComponent },
      { path: 'products/update/:id', component: AdminUpdateProductComponent },
      { path: 'orders/update/:id',  component: AdminUpdateOrderComponent },
      { path: 'orders/order-details/:id',  component: AdminOrderDetailsComponent }]
  },
  { path: '**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
