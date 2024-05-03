import { Cart } from "./cart";
import { Categories } from "./categories";

export class Products {
    productId:number;
    productName:string;
    price:number;
    availability:number;
    imageLink:string;
    productDescription:string;

    categories:Categories;
    cart:Cart[];
}
