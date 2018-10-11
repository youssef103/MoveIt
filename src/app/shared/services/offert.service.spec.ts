import { TestBed } from '@angular/core/testing';

import { OffertService } from './offert.service';

describe('OffertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OffertService = TestBed.get(OffertService);
    expect(service).toBeTruthy();
  });
});
