import { TestBed } from '@angular/core/testing';

import { ApiReviewsService } from './api-reviews.service';

describe('ApiReviewsService', () => {
  let service: ApiReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
