import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminProductsComponent } from './admin.products.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule  // Important: HttpClientModule should be imported here
  ],
  providers: [ProductService],  // Optional if providedIn: 'root' is set in ProductService
  bootstrap: [AppComponent]
})
export class AppModule { }
