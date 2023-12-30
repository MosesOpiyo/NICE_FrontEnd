import { TestBed } from '@angular/core/testing';

import { StoriesStoreService } from './stories-store.service';

describe('StoriesStoreService', () => {
  let service: StoriesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoriesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
