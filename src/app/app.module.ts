import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SallesComponent } from './salles/salles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FilmsModule} from './films/films.module';

import {AppRoutingModule} from './app-routing.module';
import { AddSallesComponent } from './add-salles/add-salles.component';

@NgModule({
  declarations: [
    AppComponent,
    SallesComponent,
    PageNotFoundComponent,
    AddSallesComponent
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
