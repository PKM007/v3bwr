import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-registration',
  templateUrl: './booking-registration.component.html',
  styleUrls: ['./booking-registration.component.scss'],
})
export class BookingRegistrationComponent {
  closeNav() {
    document.getElementById('mySidenav')!.style.width = '0';
  }
}
