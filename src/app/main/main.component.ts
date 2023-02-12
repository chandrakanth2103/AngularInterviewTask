import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from '../Service/home-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public showList:any;
  public showId:any;
  public search:any;
  public ShowSearch:any=[];
  public isSearch:boolean=false;
  constructor(private home_service:HomeServiceService, private router:Router){}

  ngOnInit(): void {
    this.home_service.getAllShows()
    .subscribe((allShowsResponse: any)=>{
      let allShowsResponseArray:any=[];
      allShowsResponse.map((genresResponse:any)=>{
        allShowsResponseArray.push(genresResponse.genres);
        const genres = genresResponse.genres;
        allShowsResponseArray = [...allShowsResponseArray, ...genres];
      })
      const uniqueGenre = Array.from(new Set(allShowsResponseArray.flat())); //finding out the list of genres without duplicate
      let uniqueGenreObject:any={};
      uniqueGenre.map((val:any)=>{ 
        allShowsResponse.filter((show: any) => show.genres.includes(val)).map((filterValue: any)=>{
          uniqueGenreObject[val] =uniqueGenreObject[val]? [...uniqueGenreObject[val], filterValue] : [filterValue];
      })
      uniqueGenreObject[val]= uniqueGenreObject[val].sort((a: any,b: any)=> (a.rating.average < b.rating.average ? 1 : -1))
      uniqueGenreObject[val].length= uniqueGenreObject[val].length>7 ? uniqueGenreObject[val].length=7 : uniqueGenreObject[val].length;
      })
      this.showList=uniqueGenreObject;
    })
  }
  singleShow(key:any){
    return this.showList[key];
  }

  ScreenPageRoute(id:any){
    this.router.navigate(['screen',id])
  }

  SearchShowByName(name:any){
    this.home_service.getAllShows()
    .subscribe((response:any)=>{
      let showIfo= response.filter((show:any)=> show.name == name);
      this.ShowSearch=showIfo;
      this.isSearch=true;
    })
  }
  ClearContent(){
    this.ShowSearch=[];
    this.isSearch=false;
    this.search='';
  }
}
