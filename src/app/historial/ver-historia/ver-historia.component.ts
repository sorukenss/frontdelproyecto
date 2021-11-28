import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-ver-historia',
  templateUrl: './ver-historia.component.html',
  styleUrls: ['./ver-historia.component.css']
})
export class VerHistoriaComponent implements OnInit {

  first = 0;

  rows = 10;
  personas:any[] = [];
  activeIndex: number = 1;
  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Personal',
      routerLink: ['/counter']
  }
];
  }

}
