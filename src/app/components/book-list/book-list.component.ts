import { Component } from '@angular/core';
import { Book } from 'src/app/models/books.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books?: Book[];
  currentBook: Book = {};
  currentIndex: number = -1;
  title = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.retrieveBooks();
  }

  retrieveBooks(): void{
    this.bookService.getAll()
    .subscribe(
      data=> {
        this.books = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

refreshList(): void {
  this.retrieveBooks();
  this.currentBook = {};
  this.currentIndex = -1;
}

setActive(book: Book, index: number): void {
  this.currentBook = book;
  this.currentIndex = index;
}

removeAllBooks(): void {
  this.bookService.deleteAll()
  .subscribe(
    response => {
      console.log(response);
      this.refreshList();
    },
    error => {
      console.log(error);
    });
}

searchTitle(): void {
  this.currentBook = {};
  this.currentIndex = -1;

  this.bookService.findByTitle(this.title)
  .subscribe(
    data => {
      this.books = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
}

}
