import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedProductsComponent } from './processed-products.component';

describe('ProcessedProductsComponent', () => {
  let component: ProcessedProductsComponent;
  let fixture: ComponentFixture<ProcessedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessedProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
