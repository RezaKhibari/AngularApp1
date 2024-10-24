import { Injectable } from "@angular/core";
import { Product } from "./model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: { product: Product; count: number }[] = [];

  reserve(product: Product, count: number) {
    this.reservations.push({ product, count });
  }

  getReservations() {
    return this.reservations;
  }
}
