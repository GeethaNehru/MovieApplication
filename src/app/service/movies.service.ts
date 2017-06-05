import { Injectable } from '@angular/core';

import {Jsonp} from '@angular/http';


import 'rxjs/Rx';




@Injectable()
export class MovieService {
 

 
  constructor(private jsonp: Jsonp) {  }
page=1;

    getmovies(search :string)
    {
    
      let url = 'https://api.themoviedb.org/3/search/movie?api_key=68d2d41f4ea1e5493e879a184acab233&language=en-US&page='+this.page+'&include_adult=false&query='+search+'&callback=JSONP_CALLBACK';
      return this.jsonp.get(url).map(res => res.json() );
    
    }

    // getGenre()
    // {
    //   let url=`https://api.themoviedb.org/3/genre/movie/list?api_key=68d2d41f4ea1e5493e879a184acab233&language=en-US&query=the&page=1&include_adult=false&callback=JSONP CALLBACK`;
    //  return this.jsonp.get(url).map(result => result.json() );
    // }

    
}