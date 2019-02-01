import { TestBed } from '@angular/core/testing';

import { BienImmobilierService } from './bien-immobilier.service';

describe('BienImmobilierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BienImmobilierService = TestBed.get(BienImmobilierService);
    expect(service).toBeTruthy();
  });
});
