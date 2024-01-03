import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarminfoComponent } from './farminfo.component';

describe('FarminfoComponent', () => {
  let component: FarminfoComponent;
  let fixture: ComponentFixture<FarminfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarminfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarminfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
