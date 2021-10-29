import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeContentComponent } from './components/anime-content/anime-content.component';

const routes: Routes = [
  {path: "", component: AnimeContentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
