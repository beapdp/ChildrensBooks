import { BooksService } from './../../core/services/books/books.service';
import { Book } from './../../core/services/books/book.model';
import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],

})
export class BookListComponent implements OnInit{

  public books: Book[] = [];
  public filterText: string = '';


  constructor(private booksService: BooksService) {}

  public ngOnInit(): void {
    this.booksService.getBooks().subscribe((booksFromApi) => {
      this.books = booksFromApi;
    })
  }
}
