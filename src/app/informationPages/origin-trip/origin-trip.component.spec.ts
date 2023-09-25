import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginTripComponent } from './origin-trip.component';

describe('OriginTripComponent', () => {
  let component: OriginTripComponent;
  let fixture: ComponentFixture<OriginTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OriginTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
