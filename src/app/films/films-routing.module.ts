import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FilmListComponent} from '../film-list/film-list.component';
import {FilmComponent} from '../film/film.component';


const filmRoutes : Routes = [
    {path : 'films', component : FilmListComponent},
    {path : 'films/:id', component : FilmComponent}
];

@NgModule ({
    imports : [
        RouterModule.forChild(filmRoutes)
    ],
    exports : [
        RouterModule
    ]
})

export class FilmsRoutingModule {}