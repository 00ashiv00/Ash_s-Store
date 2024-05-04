import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { Categories } from './categories';
import { OrderDetails } from './order-details';
import { Orders } from './orders';
import { Products } from './products';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class OfsServiceService {
  baseOrderUrl="http://localhost:8080/orders";
  baseUsersUrl="http://localhost:8080/users";
  baseOrderDetailsUrl="http://localhost:8080/order-details/order";
  baseProductUrl="http://localhost:8080/products";
  baseCartUrl="http://localhost:8080/cart";
  baseCreateOrderURL="http://localhost:8080/cart-order";
  baseCreateCartItemURL="http://localhost:8080/cart/add";
  baseCreateUserURL="http://localhost:8080/users/add";
  baseCancelOrderURL="http://localhost:8080/orders";
  baseCategoriesURL="http://localhost:8080/categories";
  baseCreateNewProductURL="http://localhost:8080/products/add";
  baseUpdateProductURL="http://localhost:8080/products/update";
  baseUpdateOrderURL="http://localhost:8080/orders/update";
  baseOrderByUsersUrl="http://localhost:8080/orders/user";
  baseCartByUserURL="http://localhost:8080/cart/user";
  baseRemoveCartItemURL="http://localhost:8080/cart";
  baseDeleteProductURL="http://localhost:8080/products";
 

  constructor(private http:HttpClient) { }

  getOrders(): Observable<Orders[]>{
    return this.http.get<Orders[]>(`${this.baseOrderUrl}`);
  }

  getOrdersByUserName(userName: string):Observable<Orders[]> {
    return this.http.get<Orders[]>(`${this.baseOrderByUsersUrl}/${userName}`);
    
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUsersUrl}`);
  }

  getOrderDetails(id:number): Observable<OrderDetails[]>{
    return this.http.get<OrderDetails[]>(`${this.baseOrderDetailsUrl}/${id}`);
    
  }

  getCategories():Observable<Categories[]>{
    return this.http.get<Categories[]>(`${this.baseCategoriesURL}`);
  }

  getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(`${this.baseProductUrl}`);
  }
  
  getCart(): Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.baseCartUrl}`);
  }

  getCartByUser(userName: string):Observable<Cart[]> {
    return this.http.get<Cart[]>( `${this.baseCartByUserURL}/${userName}`);
      
  }

  createOrder(cart: Cart[]): Observable<Object>{
    return this.http.post(`${this.baseCreateOrderURL}`, cart);
  }

  createOrderByUser(cart: Cart[], userName: string):Observable<Object> {
    return this.http.post(`${this.baseCreateOrderURL}/${userName}`, cart,{ responseType: 'text' })
    
  }

  createCartItem(id:number,cart:Cart): Observable<Object>{
    return this.http.post(`${this.baseCreateCartItemURL}/${id}`,cart);
  }

  createCartItemByUser(userName:string,id:number,cart:Cart): Observable<Object>{
    return this.http.post(`${this.baseCreateCartItemURL}/${userName}/${id}`,cart,{ responseType: 'text' });
  }

  removeCartItem(id: number):Observable<Object>{
    return this.http.delete(`${this.baseRemoveCartItemURL}/${id}`);
  }

  createNewUser(user:User): Observable<Object>{
    return this.http.post(`${this.baseCreateUserURL}`,user);
  }

  cancelTheOrder(id:number):Observable<Object>{
    return this.http.delete(`${this.baseCancelOrderURL}/${id}`,{ responseType: 'text' });
  }

  createNewProduct(id:number,product:Products):Observable<object>{
    return this.http.post(`${this.baseCreateNewProductURL}/${id}`,product,);
  }

  UpdateProduct(product:Products):Observable<object>{
    return this.http.post(`${this.baseUpdateProductURL}`,product);
  }


  deleteProduct(productId: number) {
    return this.http.delete(`${this.baseDeleteProductURL}/${productId}`);
  }

  UpdateOrder(order:Orders,id:number):Observable<object>{
    return this.http.put(`${this.baseUpdateOrderURL}/${id}`,order);
  }

 


}
