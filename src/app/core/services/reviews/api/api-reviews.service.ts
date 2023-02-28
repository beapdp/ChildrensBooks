import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiReviews } from './api-reviews.models';

const BASE_URL = 'https://63ea3915e0ac9368d64d3825.mockapi.io/api/reviews'

@Injectable({
  providedIn: 'root'
})
export class ApiReviewsService {

  constructor(private http: HttpClient) { }

  public getApiReviews(): Observable<ApiReviews[]>{
    return this.http.get<ApiReviews[]>(BASE_URL);

  }

}
