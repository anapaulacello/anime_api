import { Component, Input, OnInit } from '@angular/core';
import { NavModels } from '../../models/nav-models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() navigation!:NavModels;
  constructor() { }

  ngOnInit(): void {
  }

}
