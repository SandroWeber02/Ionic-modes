import { Component, OnInit } from '@angular/core';
import { ListPage } from '../list/list.page';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Nav = ListPage;

}
