import { Component, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";
import { ReservationService } from "./reservation.service";

@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  //styleUrls: ["./reservation.component.css"]
})
export class ReservationComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  reservationCount: number = 1;

  constructor(private dataSource: StaticDataSource, private reservationService: ReservationService) {}

  ngOnInit() {
    this.dataSource.getProducts().subscribe(products => this.products = products);
  }

  reserve() {
    if (this.selectedProduct) {
      this.reservationService.reserve(this.selectedProduct, this.reservationCount);
      alert(`Reserved ${this.reservationCount} slot(s) for ${this.selectedProduct.name}!`);
    }
  }
}
