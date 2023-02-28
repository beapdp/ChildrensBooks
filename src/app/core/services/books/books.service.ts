import { ApiReviewsService } from './../reviews/api/api-reviews.service';
import { Book } from './book.model';
import { ApiBook } from './api/api-book.models';
import { map, Observable } from 'rxjs';
import { ApiBooksServiceService } from './api/api-books.service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private apiBooksService: ApiBooksServiceService,
    private apiReviewsService: ApiReviewsService) { }

  public getBooks(): Observable<Book[]>{
    return this.apiBooksService.getApiBooks().pipe(
      map((books: ApiBook[]) => {
        return books.map((book) => book )
      })
    )
  }

  public getBookDetail(title:string): Observable<Book>{
    return this.apiBooksService.getApiBookDetail(title).pipe(
      map(book => book)
    );
  }

  public createBook(body: Book): Observable<Book> {
    return this.apiBooksService.createApiBook(body).pipe(
      map((book) => book)
    );
  }

  public getAddedBooks(): Observable<Book[]> {
    return this.apiBooksService.getApiBooks().pipe(
      map((books: ApiBook[]) => {
        return books.filter((book) => book.added_by_user === true);       
      })
    );
  }
}
