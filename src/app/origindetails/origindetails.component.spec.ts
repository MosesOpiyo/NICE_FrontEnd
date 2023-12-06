import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigindetailsComponent } from './origindetails.component';

describe('OrigindetailsComponent', () => {
  let component: OrigindetailsComponent;
  let fixture: ComponentFixture<OrigindetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrigindetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrigindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
