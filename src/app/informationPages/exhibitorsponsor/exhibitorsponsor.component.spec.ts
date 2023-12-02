import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitorsponsorComponent } from './exhibitorsponsor.component';

describe('ExhibitorsponsorComponent', () => {
  let component: ExhibitorsponsorComponent;
  let fixture: ComponentFixture<ExhibitorsponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitorsponsorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibitorsponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
