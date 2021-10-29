import { AnimeService } from './../services/anime.service';
import { AnimeModel } from './../../models/anime-model';
import { Component, OnInit } from '@angular/core';
import { AnimeModule } from '../../anime.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anime-content',
  templateUrl: './anime-content.component.html',
  styleUrls: ['./anime-content.component.scss']
})
export class AnimeContentComponent implements OnInit {
public animeList?:AnimeModel[];
public animeForm:FormGroup;

  constructor(private animeService:AnimeService,private builder:FormBuilder) {
    this.animeForm=builder.group({
      name:['',[Validators.required,Validators.maxLength(20)]],
      studio:['',[Validators.required,Validators.maxLength(20)]],
      poster:['',[Validators.required]],
      year:['',[Validators.required]],
    })
   }

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
  public onSubmit(){
    if(this.animeForm.valid){
      const anime:AnimeModel={
        name:this.animeForm.get("name")?.value,
        studio:this.animeForm.get("studio")?.value,
        poster:this.animeForm.get("poster")?.value,
        year:this.animeForm.get("year")?.value,
      }
      this.animeService.createAnime(anime).subscribe((element:any)=>console.log(element));
    }

  }

}
