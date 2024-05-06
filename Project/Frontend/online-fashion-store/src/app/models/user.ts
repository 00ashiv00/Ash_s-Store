import { Cart } from "./cart";
import { Orders } from "./orders";

export class User {
    userId:number;
    fullName:string;
    gender:string;
    address:string;
    email:string;
    mobileNo:string;
    password:string;
    userName:string;

    cart: Cart[];
    orders: Orders[];

}
