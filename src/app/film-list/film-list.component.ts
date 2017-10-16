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

  getFilms(): void {
    this.filmService.getFilms().subscribe(film => this.films = film);
  }

  ngOnInit(): void {
    this.getFilms();
  }

  onSelect (film : Film) {
    this.selectedFilm = film;
  }

}
