import { AnimeService } from './../services/anime.service';
import { AnimeModel } from './../../models/anime-model';
import { Component, OnInit } from '@angular/core';
import { AnimeModule } from '../../anime.module';

@Component({
  selector: 'app-anime-content',
  templateUrl: './anime-content.component.html',
  styleUrls: ['./anime-content.component.scss']
})
export class AnimeContentComponent implements OnInit {
public animeList?:AnimeModel[];
  constructor(private animeService:AnimeService) { }

  ngOnInit(): void {
    this.animeService.getAllAnime().subscribe((element:any)=>{
      const apiResults:AnimeModel[]=element.data.anime;
      console.log(apiResults);
      const formattedResults=apiResults.map(({name,studio,poster,year})=>(
        {
        name,
        studio,
        poster,
        year
      }));
      this.animeList=formattedResults;
    })
  }

}
