import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBook } from './api-book.models';

const API_BOOK_URL = "https://63ea3915e0ac9368d64d3825.mockapi.io/api";


@Injectable({
  providedIn: 'root'
})
export class ApiBooksServiceService {

  constructor(
    private http: HttpClient
  ) { }
  
  public getApiBooks(): Observable<ApiBook[]> {
    return this.http.get<ApiBook[]>(`${API_BOOK_URL}/books`);
  }

  public getApiBookDetail(title: string): Observable<ApiBook>{
    return this.http.get<ApiBook>(`${API_BOOK_URL}/books/${title}`);
  }

  public createApiBook(apiBook: ApiBook): Observable<ApiBook> {
    apiBook.added_by_user = true; 
    return this.http.post<ApiBook>(`${API_BOOK_URL}/books`, apiBook);
  }
  
}
