import { Book } from './../../../../core/services/books/book.model';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() public book?: Book;

  constructor(private router: Router) {}
  public goToDetail(){
    if (this.book){
    this.router.navigate(['book-detail', this.book.id]);
    }  
  }
}
