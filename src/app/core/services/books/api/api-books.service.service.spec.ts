import { TestBed } from '@angular/core/testing';

import { ApiBooksServiceService } from '../api/api-books.service.service';

describe('ApiBooksServiceService', () => {
  let service: ApiBooksServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBooksServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
