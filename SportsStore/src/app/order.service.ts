import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './model/order.model';

@Injectable()
export class OrderService {
  private ordersUrl = 'api/orders';  // URL to RESTful backend service

  constructor(private http: HttpClient) {}

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.ordersUrl, order);
  }
}
