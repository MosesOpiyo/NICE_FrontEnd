import { TestBed } from '@angular/core/testing';

import { FarmerprofileService } from './farmerprofile.service';

describe('FarmerprofileService', () => {
  let service: FarmerprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
