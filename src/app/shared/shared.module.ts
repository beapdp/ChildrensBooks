import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFilterPipe } from './pipes/book-filter.pipe';



@NgModule({
  declarations: [
    BookFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookFilterPipe
  ]
})
export class SharedModule { }
