import { TestBed } from '@angular/core/testing';

import { ClasseStandardService } from './classe-standard.service';

describe('ClasseStandardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClasseStandardService = TestBed.get(ClasseStandardService);
    expect(service).toBeTruthy();
  });
});
