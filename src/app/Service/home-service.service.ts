import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  
  constructor(private _http:HttpClient) { }

  getAllShows(){
    return this._http.get('https://api.tvmaze.com/shows');
  }

  getShowById(id:any){
    return this._http.get('https://api.tvmaze.com/shows/'+id);
  }
}
