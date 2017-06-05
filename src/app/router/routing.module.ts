import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from "../movies/movies.component";
import { FavouritesComponent } from "../favourites/favourites.component";


const APP_ROUTES: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'home', component: MoviesComponent},
  {path: 'favouriteslist', component: FavouritesComponent},

];


@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRouting {}