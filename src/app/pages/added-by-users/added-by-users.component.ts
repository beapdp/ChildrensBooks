import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../core/services/books/books.service';
import { Book } from '../../core/services/books/book.model';

@Component({
  selector: 'app-added-by-users',
  templateUrl: './added-by-users.component.html',
  styleUrls: ['./added-by-users.component.css']
})
export class AddedByUsersComponent implements OnInit {
  addedBooks: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.getAddedBooks();
  }

  getAddedBooks() {
    this.booksService.getAddedBooks().subscribe({
      next:(books) => {
        this.addedBooks = books;
      }, error: error => {
        console.log(error);
      }
    });
  }
}
