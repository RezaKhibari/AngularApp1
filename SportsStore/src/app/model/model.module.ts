import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { AppComponent } from './app.Component'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReservationComponent } from './reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule to imports
  ],
providers: [ProductRepository, StaticDataSource]

})
export class ModelModule { }
