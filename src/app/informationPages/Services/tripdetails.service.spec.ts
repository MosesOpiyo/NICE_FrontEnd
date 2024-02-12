import { TestBed } from '@angular/core/testing';

import { TripdetailsService } from './tripdetails.service';

describe('TripdetailsService', () => {
  let service: TripdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
