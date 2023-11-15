import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewManifestComponent } from './new-manifest.component';

describe('NewManifestComponent', () => {
  let component: NewManifestComponent;
  let fixture: ComponentFixture<NewManifestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewManifestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewManifestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
