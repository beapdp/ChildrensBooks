import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookDetailRoutingModule } from './book-detail-routing.module';
import { BookDetailComponent } from './book-detail.component';


@NgModule({
  declarations: [
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    BookDetailRoutingModule,
    RouterModule
  ]
})
export class BookDetailModule { }
