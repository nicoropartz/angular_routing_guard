import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


import { Film } from '../model/Film';

export const FILMS = [
    new Film ( '1',  'film1FR', 2000,  '',  'France' ),
    new Film ( '2', 'film2EN', 2001, '',  'England' ),
    new Film ( '3', 'film3USA', 2002,  '', 'USA' )
];
  

@Injectable()
export class FilmService {

  constructor() { }

  private filmSubject = new Subject<string>();

  film$ = this.filmSubject.asObservable();

  getFilms() {
    return Observable.of(FILMS);
  }

  getFilm(id : string) {
    return this.getFilms().map(seletfilm => seletfilm.find(film => film.id == id));
  }
}

