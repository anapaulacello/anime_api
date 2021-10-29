import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AnimeService{
  public animeURL:string="http://localhost:3000/anime";

  constructor(private httpClient:HttpClient) { }

  public getAllAnime (){
    return this.httpClient.get(this.animeURL)
  }
}
