import { TestBed } from '@angular/core/testing';

import { HandleHttpErrorServiceService } from './handle-http-error-service.service';

describe('HandleHttpErrorServiceService', () => {
  let service: HandleHttpErrorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleHttpErrorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
