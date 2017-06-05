import { Injectable } from '@angular/core';

import {Http,Response} from '@angular/http';


import 'rxjs/Rx';




@Injectable()
export class GenreService {
 

 
  constructor(private http: Http) {  }


    getgenres()
    {
    
      let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=68d2d41f4ea1e5493e879a184acab233&language=en-US';
      return this.http.get(url).map((response:Response) => response.json() );
    
    }

    // getGenre()
    // {
    //   let url=`https://api.themoviedb.org/3/genre/movie/list?api_key=68d2d41f4ea1e5493e879a184acab233&language=en-US&query=the&page=1&include_adult=false&callback=JSONP CALLBACK`;
    //  return this.jsonp.get(url).map(result => result.json() );
    // }

    
}