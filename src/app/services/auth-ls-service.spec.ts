import { TestBed } from '@angular/core/testing';

import { AuthLsService } from './auth-ls-service';

describe('AuthLsService', () => {
  let service: AuthLsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthLsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
