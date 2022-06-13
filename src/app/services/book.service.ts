import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAll(): Observable<Book[]> {
  return this.http.get<Book[]>(baseUrl);
}

  get(id: any): Observable<Book> {
  return this.http.get(`$(baseUrl)/$(id)')'};
}

  create(data: any): Observable<any> {
  return this.http.post(baseUrl, data);
}

  update(id: any, data: any): Observable<any> {
  return this.http.put('$(baseUrl)/${id}');
  }

  delete(id: any): Observable<any> {
    return this.http.delete('$(baseUrl)/${id}');
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findTitle(title: any): Observable<Book[]> {
    return this.http.get<Book[]>('$baseUrl)?title=${title}');
  }
}
