import { TestBed, inject } from '@angular/core/testing';

import { ZVRPubapiService } from './zvrpubapi.service';

describe('ZVRPubapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZVRPubapiService]
    });
  });

  it('should be created', inject([ZVRPubapiService], (service: ZVRPubapiService) => {
    expect(service).toBeTruthy();
  }));
});
