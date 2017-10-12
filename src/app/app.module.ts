import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SallesComponent } from './salles/salles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FilmsModule} from './films/films.module';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SallesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FilmsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
