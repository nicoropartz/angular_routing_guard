import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { SallesComponent } from './salles/salles.component';
import { FilmComponent } from './film/film.component';
import { AddSallesComponent } from './add-salles/add-salles.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes : Routes = [
    {path : 'salles', component : SallesComponent},
    {path : '', redirectTo:'films', pathMatch:'full'},
    {path : '**', component : PageNotFoundComponent},
    {path : 'addnew', component : AddSallesComponent, outlet : 'popup'}
  ];
  

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}