import { TestBed } from '@angular/core/testing';

import { BienImmobilierALService } from './bien-immobilier-al.service';

describe('BienImmobilierALService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BienImmobilierALService = TestBed.get(BienImmobilierALService);
    expect(service).toBeTruthy();
  });
});
