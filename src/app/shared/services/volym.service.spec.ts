import { TestBed } from '@angular/core/testing';

import { VolymService } from './volym.service';

describe('VolymService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VolymService = TestBed.get(VolymService);
    expect(service).toBeTruthy();
  });
});
