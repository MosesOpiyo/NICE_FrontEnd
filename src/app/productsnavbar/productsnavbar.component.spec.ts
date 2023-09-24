import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsnavbarComponent } from './productsnavbar.component';

describe('ProductsnavbarComponent', () => {
  let component: ProductsnavbarComponent;
  let fixture: ComponentFixture<ProductsnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
