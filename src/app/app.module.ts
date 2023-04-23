import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './hotel-management/header/header.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HotelManagementModule } from './hotel-management/hotel-management.module';
import { MainLandingComponent } from './hotel-management/main-landing/main-landing.component';
import { FooterComponent } from './hotel-management/footer/footer.component';
import { BookingRegistrationComponent } from './hotel-management/booking-registration/booking-registration.component';
import { LoginComponent } from './hotel-management/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLandingComponent,
    FooterComponent,
    BookingRegistrationComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgImageSliderModule],
  providers: [NgImageSliderModule, HotelManagementModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
