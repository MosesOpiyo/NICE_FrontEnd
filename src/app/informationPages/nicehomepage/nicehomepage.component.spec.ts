import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicehomepageComponent } from './nicehomepage.component';

describe('NicehomepageComponent', () => {
  let component: NicehomepageComponent;
  let fixture: ComponentFixture<NicehomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NicehomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NicehomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
