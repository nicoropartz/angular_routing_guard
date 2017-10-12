import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {FilmService} from '../service/film.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';

import { Film } from '../model/Film';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router : Router, private service : FilmService) { }


  ngOnInit() 
  {

    this.film$ = this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.service.getFilm(params.get('id')));
  }

}
