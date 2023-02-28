import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { BookListComponent } from './book-list.component';
import { BookComponent } from './components/book/book.component';
import { BookListRoutingModule } from './book-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BookListComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    BookListRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    BookListComponent
  ]
})
export class BookListModule { }
