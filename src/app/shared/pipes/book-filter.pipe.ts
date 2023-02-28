import { Book } from './../../core/services/books/book.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {
  transform(books: Book[], filterText: string): Book[] {
    if (!books || !filterText) {
      return books;
    }
    return books.filter(book =>
      book.title.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}
