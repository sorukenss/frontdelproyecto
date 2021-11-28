import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ver-historial',
  templateUrl: './ver-historial.component.html',
  styleUrls: ['./ver-historial.component.css']
})
export class VerHistorialComponent implements OnInit {
  first = 0;

  rows = 10;
  historial:any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.historial=[
      {fecha:'27/09/2021', doctor:'Everth', causa:'Covid'},
      {fecha:'27/09/2021', doctor:'Isaac', causa:'Gripa'},
      {fecha:'28/10/2021', doctor:'Iván', causa:'Hola'}
    ]
  }

  next() {
    this.first = this.first + this.rows;
  }
  open(){
    this.router.navigateByUrl("/ver-historia");
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.historial ? this.first === (this.historial.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.historial ? this.first === 0 : true;
  }

}
