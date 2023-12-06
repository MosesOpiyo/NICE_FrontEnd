import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripdialogueComponent } from './tripdialogue.component';

describe('TripdialogueComponent', () => {
  let component: TripdialogueComponent;
  let fixture: ComponentFixture<TripdialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripdialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripdialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
