import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRegistrationComponent } from './booking-registration.component';

describe('BookingRegistrationComponent', () => {
  let component: BookingRegistrationComponent;
  let fixture: ComponentFixture<BookingRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
