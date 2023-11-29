import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprocessedproductComponent } from './newprocessedproduct.component';

describe('NewprocessedproductComponent', () => {
  let component: NewprocessedproductComponent;
  let fixture: ComponentFixture<NewprocessedproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewprocessedproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewprocessedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
