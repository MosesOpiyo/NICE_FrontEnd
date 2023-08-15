import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersDashBoardComponent } from './farmers-dash-board.component';

describe('FarmersDashBoardComponent', () => {
  let component: FarmersDashBoardComponent;
  let fixture: ComponentFixture<FarmersDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmersDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmersDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
