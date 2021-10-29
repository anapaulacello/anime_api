import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeContentComponent } from './components/anime-content/anime-content.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnimeContentComponent
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule,
    ReactiveFormsModule
  ]
})
export class AnimeModule { }
