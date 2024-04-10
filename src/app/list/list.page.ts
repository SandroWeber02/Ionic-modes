import { Component, OnInit } from '@angular/core';
import { CardsPage } from '../cards/cards.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  nav = CardsPage;
}
