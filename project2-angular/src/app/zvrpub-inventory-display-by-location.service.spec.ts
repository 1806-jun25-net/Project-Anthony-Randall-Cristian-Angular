import { TestBed, inject } from '@angular/core/testing';

import { ZvrpubInventoryDisplayByLocationService } from './zvrpub-inventory-display-by-location.service';

describe('ZvrpubInventoryDisplayByLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZvrpubInventoryDisplayByLocationService]
    });
  });

  it('should be created', inject([ZvrpubInventoryDisplayByLocationService], (service: ZvrpubInventoryDisplayByLocationService) => {
    expect(service).toBeTruthy();
  }));
});
