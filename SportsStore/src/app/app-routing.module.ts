import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation.component';

const routes: Routes = [
  { path: 'reserve', component: ReservationComponent },
  { path: '', redirectTo: '/reserve', pathMatch: 'full' } // Default route to Reservation
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
