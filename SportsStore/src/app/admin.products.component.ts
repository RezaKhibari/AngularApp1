import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './model/product.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html'
})
export class AdminProductsComponent {
  products: Product[] = [];
  newProduct: Product = new Product();

  constructor(private productService: ProductService) {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => this.products = products);
  }

  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe((product: Product) => {
      this.products.push(product);
      this.newProduct = new Product();  // Reset the form
    });
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.products = this.products.filter(p => p.id !== productId);
    });
  }
}
