import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BooksDetailsComponent } from './components/books-details/books-details.component';

import { AboutComponent } from './about/about.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PersonajesComponent,
    HomeComponent,
    AddBookComponent,
    BooksDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
