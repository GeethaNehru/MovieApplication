import { Injectable } from '@angular/core';
import{Headers,RequestOptions} from'@angular/http';
import {Http,Response} from '@angular/http';
import{Observable} from"rxjs/Observable";
import 'rxjs/Rx';




@Injectable()
export class FavouritesService{

  constructor(private http: Http) {  }
    
    getFavourites(arr){
         console.log("In service");
        let url = "http://localhost:3000";
        let encoded_data = JSON.stringify(arr) ;
        
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

       return this.http.post(url,encoded_data,options).map(()=>console.log('sucess'));

     

    }
    listFavourites(){
         console.log("In service");
        let url = "http://localhost:3000";
        
        
       return this.http.get(url).map(res=>res.json());    

    }
    updateFavourites(data)
    {
       let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        let body=JSON.stringify(data);
        let url = "http://localhost:3000";
        return this.http.put(`${url}/${data.id}`,data,headers).map(res=>res.json());


    }

    deleteFavourites(id:number)
    {
       let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        let url = "http://localhost:3000";
        console.log(url + id);
         return this.http.delete(`${url}/${id}`).map(res=>res.json(),()=>console.log("Deleted"),);


    }
}

