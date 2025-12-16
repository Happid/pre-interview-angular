import { TestBed } from '@angular/core/testing';

import { RefreshTokenLsService } from './refresh-token-ls-service';

describe('RefreshTokenLsService', () => {
  let service: RefreshTokenLsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefreshTokenLsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
