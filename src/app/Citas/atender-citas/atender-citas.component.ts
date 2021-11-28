import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-atender-citas',
  templateUrl: './atender-citas.component.html',
  styleUrls: ['./atender-citas.component.css'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class AtenderCitasComponent implements OnInit {

  activeState: boolean[] = [true, false, false];

  constructor(private messageService: MessageService,private router: Router) { }

  
  first = 0;

  rows = 10;
  historial:any[] = [];
  

  ngOnInit(): void {
   
    this.historial=[
      {fecha:'27/09/2021', doctor:'Everth', causa:'Covid'},
      {fecha:'27/09/2021', doctor:'Isaac', causa:'Gripa'},
      {fecha:'28/10/2021', doctor:'Iván', causa:'Hola'}
    ]
  }
  open(){
    this.router.navigateByUrl("/ver-historia");
  }


}
