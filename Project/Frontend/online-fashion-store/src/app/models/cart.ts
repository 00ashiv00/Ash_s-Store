import { Products } from "./products";
import { User } from "./user";

export class Cart {
    cartId:number;
    quantity:number;
    users:User;
    products:Products;
}
