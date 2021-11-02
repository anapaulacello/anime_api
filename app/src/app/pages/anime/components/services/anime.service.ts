import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AnimeService{
  public URL:string="http://localhost:3000/";
  public animeURL:string=`${this.URL}anime`;
  public createURL:string=`${this.animeURL}/create`;

  constructor(private httpClient:HttpClient) { }

  public getAllAnime (){
    return this.httpClient.get(this.animeURL)
  }

  public createAnime(data:any){
    console.log("entro")
    return this.httpClient.post(this.createURL,data);
  }
}
