import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "home", loadChildren: () => import("./pages/home/home-routing.module").then(m => m.HomeRoutingModule)
  },
  {
    path: "anime", loadChildren: () => import("./pages/anime/anime-routing.module").then(m => m.AnimeRoutingModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
