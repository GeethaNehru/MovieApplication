import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouting } from './router/routing.module';

import { AppComponent } from './app.component';
import {JsonpModule} from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import {MovieService} from './service/movies.service';
import { MoviesComponent } from './movies/movies.component';
import {GenreService} from './service/genre.service';
import { FavouritesComponent } from './favourites/favourites.component';
import{ FavouritesService} from'./service/favourites.service';
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FavouritesComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRouting,
    InfiniteScrollModule
    
  ],
  providers: [MovieService,GenreService,FavouritesService,FavouritesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
