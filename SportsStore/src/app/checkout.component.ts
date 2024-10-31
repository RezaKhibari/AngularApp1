import { Component } from '@angular/core';
import { OrderService } from './order.service';
import { Order } from './model/order.model';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {
  order: Order = new Order();

  constructor(private orderService: OrderService) {}

  submitOrder() {
    this.orderService.saveOrder(this.order).subscribe({
      next: order => {
        alert('Order placed successfully!');
        this.order = new Order();  // Reset the order after submission
      },
      error: err => console.error('Error submitting order', err)
    });
  }
}
