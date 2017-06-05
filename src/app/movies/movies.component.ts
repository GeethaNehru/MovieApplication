import { Component , OnInit} from '@angular/core';
import {MovieService} from '../service/movies.service';
import {GenreService} from '../service/genre.service';
import {FavouritesComponent} from '../favourites/favourites.component';

// import {genres} from '../genre-list';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit  {
searchString: string;
searchResults:Array<Object>;
genreResults=[];
totalpage:number;
page=1;


 constructor(private movieservice:MovieService,private genreservice:GenreService, private favouritesComponent:FavouritesComponent)
{

}  
  search()
   {
      this.movieservice.getmovies(this.searchString).subscribe(res => {this.searchResults = res.results; this.totalpage = res.total_pages;});
      console.log(this.searchResults);
       this.genreservice.getgenres().subscribe(res => this.genreResults = res.genres);
  }
  
  getGenre(x)
{
  let a=[];
  this.genreResults.forEach(function(data)
  {
    if(x.includes(data.id))
    {
      a.push(data.name);
    }
  
 })
  return a;

}

onScroll(searchString) {
  if(this.movieservice.page<=this.totalpage){
      this.movieservice.page++;      
         this.movieservice.getmovies(searchString).subscribe(data => {data.results.forEach((data) => {
              this.searchResults.push(data);
            })}
            
        );
  }
}



ngOnInit()
{

}
}
