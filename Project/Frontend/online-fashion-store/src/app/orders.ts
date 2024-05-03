import { OrderDetails } from "./order-details";
import { User } from "./user";

export class Orders {
    orderId: number;
    status:string;
    totalAmount:number;
    orderDate:Date;

    users:User;
    orderDetails:OrderDetails[];

    


}
