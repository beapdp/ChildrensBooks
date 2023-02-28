import { BooksService } from './../../core/services/books/books.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent  {
  public addedBook?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private booksService: BooksService,
  ) {
    this.createNewForm();
  }

  public createNewForm() {
    this.addedBook = this.fb.group({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      publication_year: new FormControl('', [Validators.required]),
      publisher: new FormControl('', [Validators.required]),
      synopsis: new FormControl('', [Validators.required]),
      cover: new FormControl('', [Validators.required])
    });
  }

  public addingNewBook(){
    if(!this.addedBook?.valid) {
      alert('Por favor, completa todos los campos para poder añadir un cuento!');
      return;
    }
     this.booksService.createBook(this.addedBook?.value).subscribe(() => {
      alert('¡Cuento añadido!')
      this.addedBook?.reset();
     })
  } 

}

