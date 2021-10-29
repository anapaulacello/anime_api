import { Component } from '@angular/core';
import { NavModels } from './core/models/nav-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navigation:NavModels={
    item:[
      {
        name: "HOME",
        link: "/home",        
      },
      {
        name: "anime",
        link: "/anime",        
      }
    ]
  }
}
