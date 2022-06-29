import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { HeaderWithSearchComponent } from './components/header-with-search/header-with-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    HeaderWithSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
