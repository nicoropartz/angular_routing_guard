import { Component, OnInit,  } from '@angular/core';
import {FilmService} from '../service/film.service';
import {Film} from '../model/Film';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
  providers : [FilmService]
})
export class FilmListComponent implements OnInit {

  constructor(private filmService : FilmService) { }
  films : Film[];
  selectedFilm : Film;

  getHeroes(): void {
    this.filmService.getFilms().then(film => this.films = film);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect (film : Film) {
    this.selectedFilm = film;
  }

}
