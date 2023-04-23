import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookingRegistrationComponent } from './hotel-management/booking-registration/booking-registration.component';
import { MainLandingComponent } from './hotel-management/main-landing/main-landing.component';
import { LoginComponent } from './hotel-management/login/login.component';

const routes: Routes = [
  { path: '', component: MainLandingComponent },
  { path: 'register', component: BookingRegistrationComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
