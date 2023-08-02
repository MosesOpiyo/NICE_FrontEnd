import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeNavbarComponent } from './coffee-navbar.component';

describe('CoffeeNavbarComponent', () => {
  let component: CoffeeNavbarComponent;
  let fixture: ComponentFixture<CoffeeNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
