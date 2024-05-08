import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './models/cart';
import { Categories } from './models/categories';
import { OrderDetails } from './models/order-details';
import { Orders } from './models/orders';
import { Products } from './models/products';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class OfsServiceService {
  
  
  baseOrderUrl="http://localhost:8080/orders";
  baseOrderByUsersUrl="http://localhost:8080/orders/user";
  baseUpdateOrderURL="http://localhost:8080/orders/update";
  baseCreateOrderURL="http://localhost:8080/cart-order";
  baseCancelOrderURL="http://localhost:8080/orders";

  baseUsersUrl="http://localhost:8080/users";
  baseUserByUserNameUrl="http://localhost:8080/user-details"; 
  baseUpdateUserURL="http://localhost:8080/users/update";
  baseCreateUserURL="http://localhost:8080/users/add";

  baseOrderDetailsUrl="http://localhost:8080/order-details/order";

  baseProductUrl="http://localhost:8080/products";
  baseCreateNewProductURL="http://localhost:8080/products/add";
  baseUpdateProductURL="http://localhost:8080/products/update";
  baseDeleteProductURL="http://localhost:8080/products";

  baseCategoriesURL="http://localhost:8080/categories";

  baseCartUrl="http://localhost:8080/cart";
  baseCreateCartItemURL="http://localhost:8080/cart/add";
  baseCartByUserURL="http://localhost:8080/cart/user";
  baseRemoveCartItemURL="http://localhost:8080/cart";
 

  constructor(private http:HttpClient) { }


  //Orders
  getOrders(): Observable<Orders[]>{
    return this.http.get<Orders[]>(`${this.baseOrderUrl}`);
  }

  createOrder(cart: Cart[]): Observable<Object>{
    return this.http.post(`${this.baseCreateOrderURL}`, cart);
  }

  createOrderByUser(cart: Cart[], userName: string):Observable<Object> {
    return this.http.post(`${this.baseCreateOrderURL}/${userName}`, cart,{ responseType: 'text' })
    
  }

  getOrdersByUserName(userName: string):Observable<Orders[]> {
    return this.http.get<Orders[]>(`${this.baseOrderByUsersUrl}/${userName}`);
    
  }

  UpdateOrder(order:Orders,id:number):Observable<object>{
    return this.http.put(`${this.baseUpdateOrderURL}/${id}`,order);
  }

  cancelTheOrder(id:number):Observable<Object>{
    return this.http.delete(`${this.baseCancelOrderURL}/${id}`,{ responseType: 'text' });
  }
  
  
  //Users
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUsersUrl}`);
  }
  
  getUserByUserName(userName: string) {
    return this.http.get<User>(`${this.baseUserByUserNameUrl}/${userName}`);
  }
  
  createNewUser(user:User): Observable<Object>{
    return this.http.post(`${this.baseCreateUserURL}`,user);
  }
  
  updateUser(user:User): Observable<Object>{
    return this.http.post(`${this.baseUpdateUserURL}`,user);
  }



  //OrderDetails
  getOrderDetails(id:number): Observable<OrderDetails[]>{
    return this.http.get<OrderDetails[]>(`${this.baseOrderDetailsUrl}/${id}`);
    
  }


  //Categories
  getCategories():Observable<Categories[]>{
    return this.http.get<Categories[]>(`${this.baseCategoriesURL}`);
  }


  //Cart
  getCart(): Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.baseCartUrl}`);
  }
  
  getCartByUser(userName: string):Observable<Cart[]> {
    return this.http.get<Cart[]>( `${this.baseCartByUserURL}/${userName}`);
    
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
  
  
  //Products
  getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(`${this.baseProductUrl}`);
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


}
