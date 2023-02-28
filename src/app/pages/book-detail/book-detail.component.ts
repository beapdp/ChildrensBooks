import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { BooksService } from './../../core/services/books/books.service';
import { Book } from './../../core/services/books/book.model';
import { Reviews } from './../../core/services/reviews/reviews.models';
import { ReviewsService } from './../../core/services/reviews/reviews.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  public book?: Book;
  public reviews?: Reviews[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BooksService,
    private reviewsService: ReviewsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const bookTitle = params['title'];
      forkJoin({
        book: this.booksService.getBookDetail(bookTitle),
        reviews: this.reviewsService.getReviews()
      }).pipe(
        map((result) => {
          const book = result.book;
          const reviews = result.reviews.filter((review) => review.title === book.title);
          return { book, reviews };
          
        })
      ).subscribe((data) => {
        this.book = data.book;
        this.reviews = data.reviews;
      });
    });
  }
}

