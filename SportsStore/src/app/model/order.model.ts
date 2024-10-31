import { Product } from "./product.model";

export class Order {
  public id: number = 0;
  public name: string = '';
  public address: string = '';
  public city: string = '';
  public country: string = '';
  public shipped: boolean = false;

  constructor(public products: Product[] = []) {}
}
