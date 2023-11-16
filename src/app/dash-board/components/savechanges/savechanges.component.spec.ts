import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavechangesComponent } from './savechanges.component';

describe('SavechangesComponent', () => {
  let component: SavechangesComponent;
  let fixture: ComponentFixture<SavechangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavechangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavechangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
