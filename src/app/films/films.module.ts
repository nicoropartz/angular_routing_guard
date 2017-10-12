import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {FilmListComponent} from '../film-list/film-list.component';
import {FilmComponent} from '../film/film.component';

import {FilmService} from '../service/film.service';

import {FilmsRoutingModule} from './films-routing.module';

@NgModule({
    imports : [
     CommonModule,
     FormsModule,
     FilmsRoutingModule
    ],
    declarations : [
        FilmListComponent,
        FilmComponent
    ],
    providers : [
        FilmService
    ]
})

export class FilmsModule {}