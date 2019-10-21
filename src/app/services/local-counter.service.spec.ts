import { TestBed } from '@angular/core/testing';

import { LocalCounterService } from './local-counter.service';

describe('LocalCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalCounterService = TestBed.get(LocalCounterService);
    expect(service).toBeTruthy();
  });
});
