import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost/sportsstoreapi/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}products.php`);
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}addproduct.php`, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}updateproduct.php`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.request('delete', `${this.baseUrl}deleteproduct.php`, {
      body: { id: id }
    });
  }
}
