import { TestBed } from '@angular/core/testing';

import { BienImmobilierAAService } from './bien-immobilier-aa.service';

describe('BienImmobilierAAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BienImmobilierAAService = TestBed.get(BienImmobilierAAService);
    expect(service).toBeTruthy();
  });
});
