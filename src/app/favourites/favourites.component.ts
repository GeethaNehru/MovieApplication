import { Component, OnInit } from '@angular/core';
import {FavouritesService} from '../service/favourites.service';
import{Observable} from "rxjs/Rx";
import { GenreService} from "../service/genre.service";


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

getResults=[];

genreResults=[];
  constructor(private favourites:FavouritesService,private genreservice:GenreService) {
this.favourites.listFavourites().subscribe(res=>{this.getResults=res})
 this.genreservice.getgenres().subscribe(res => this.genreResults = res.genres);


 
   }

  ngOnInit() {
  }
addFavourite(id,title,date,rating,genre,overview,poster_path)
{
  let obj={id,title,date,rating,genre,overview,poster_path};
  let b=[];
  b.push(obj);
   this.favourites.getFavourites(obj).subscribe((data) => console.log('posted!!'));
   
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

deletefavourites(id)
{
  this.favourites.deleteFavourites(id).subscribe(data=>{this.getResults=data});
}


updateRating(id,title,date,rating,genre,overview,poster_path)
{
  let obj={id,title,date,rating,genre,overview,poster_path};
  this.favourites.updateFavourites(obj).subscribe(data => {this.getResults=data});

}

}
