import { TestBed, inject } from '@angular/core/testing';

import { ZVRPubLocationsService } from './zvrpub-locations.service';

describe('ZVRPubLocationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZVRPubLocationsService]
    });
  });

  it('should be created', inject([ZVRPubLocationsService], (service: ZVRPubLocationsService) => {
    expect(service).toBeTruthy();
  }));
});
