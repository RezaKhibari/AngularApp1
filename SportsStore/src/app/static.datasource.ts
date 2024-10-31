import { Injectable } from "@angular/core";
import { Product } from "./model/product.model";
import { Observable, from } from "rxjs";
@Injectable()
export class StaticDataSource {
private products: Product[] = [
  new Product(1, "Conservation Area 1 - 9am", "Conservation Area", "Visit Conservation Area 1 from 9am to 12pm", 100),
  new Product(2, "Conservation Area 1 - 1pm", "Conservation Area", "Visit Conservation Area 1 from 1pm to 4pm", 100),
  new Product(3, "Conservation Area 2 - 9am", "Conservation Area", "Visit Conservation Area 2 from 9am to 12pm", 100),
  new Product(4, "Conservation Area 2 - 1pm", "Conservation Area", "Visit Conservation Area 2 from 1pm to 4pm", 100),
];
getProducts(): Observable<Product[]> {
return from([this.products]);
}
}
