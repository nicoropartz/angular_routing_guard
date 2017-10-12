import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { subject } from 'rxjs/subject';


import { Film } from '../model/Film';

export const FILMS: Film[] = [
    { titre: 'film1FR', annee: 2000, realisateur: '', pays : 'France' },
    { titre: 'film2EN', annee: 2001, realisateur: '', pays : 'England' },
    { titre: 'film3USA', annee: 2002, realisateur: '', pays : 'USA' }
];
  

@Injectable()
export class FilmService {
  getFilms(): Promise<Film[]> {
    return Promise.resolve(FILMS);
  }

  getFilm (id : string) : Observable<Hero> {
    return FILMS[0];
  }
}

