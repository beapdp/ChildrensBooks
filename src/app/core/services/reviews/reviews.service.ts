import { ApiReviews } from './api/api-reviews.models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiReviewsService } from './api/api-reviews.service';
import { Injectable } from '@angular/core';
import { Reviews } from './reviews.models';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private apiReviewsService: ApiReviewsService) { }

  public getReviews(): Observable<Reviews[]> {
    return this.apiReviewsService.getApiReviews().pipe(
      map((apiReviews: ApiReviews[]) => {
        return apiReviews.map((apiReview: ApiReviews) => {
          const { createdAt, ...review } = apiReview;
          return review as Reviews;
        });
      })
    );
  }
}
