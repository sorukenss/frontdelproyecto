import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  items: MenuItem[];
  currentUser: User;
  usuario: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private loginService: AuthenticationService
  ) {
    
  }

  logout() {
    this.authenticationService.logout();
    window.location.reload();
  }

  validateRole(rol:string){
    if(rol=='PACIENTE'){
      this.items = [
        {
          label: 'Inicio',
          icon: 'pi pi-fw pi-home',
          routerLink: ['/'],
  
        }, {
          label: 'Citas',
          icon: 'pi pi-fw pi-book',
          items: [{
            label: 'Agendar Cita',
            icon: 'pi pi-fw pi-book',
            routerLink: ['/agendar-cita']
          },
          {
            label: 'Consultar Citas',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/consultar-cita']
          }
          ]
        }, {
          label: 'Datos',
          icon: 'pi pi-fw pi-book',
          items: [{
            label: 'Datos Personales',
            icon: 'pi pi-fw pi-users',
            routerLink: ['paciente-mostrar/:id']
          },
          {
            label: 'Prueba',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/consultar-cita']
          }
          ]
        },
        {
            label: 'Cerrar Sesión',
            icon: 'pi pi-fw pi-minus-circle',
            command: e => this.logout()
        }
      ];
    }else if(rol=='PSICOLOGO'){
      this.items = [
        {
          label: 'Inicio',
          icon: 'pi pi-fw pi-home',
          routerLink: ['/'],
  
        },
        {
          label: 'Pacientes',
          icon: 'pi pi-fw pi-user',
          items: [{
            label: 'Nuevo',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: ['/pacientes-registro']
          },
          {
            label: 'Lista de Pacientes',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/pacientes-consulta']
          },
          ]
        },
        {
          label: 'Psicólogos',
          icon: 'pi pi-fw pi-users',
          items: [
            { label: 'Registrar Psicologo', icon: 'pi pi-fw pi-user-plus', routerLink: ['/registrar-psicologo'] },
            { label: 'Lista de Psicólogos', icon: 'pi pi-fw pi-list', routerLink: ['/lista-psicologo'] }
          ]
        }, {
          label: 'Citas',
          icon: 'pi pi-fw pi-book',
          items: [
          {
            label: 'Consultar Citas',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/consultar-cita']
          },
          {
            label: 'Atender Citas',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/atender-cita']
          }
          ]
        }, {
          label: 'Tratamiento',
          icon: 'pi pi-fw pi-book',
          items: [
            {
              label: 'Consultar Tratamiento',
              icon: 'pi pi-fw pi-list',
              routerLink: ['/consultar-tratamiento']
            },
          ]
        },{
          label: 'Cerrar Sesión',
          icon: 'pi pi-fw pi-list',
          command: e => this.logout()
      }
      ];
    }
  }



  ngOnInit() {
    let currentUser = this.loginService.currentUserValue;
    if (currentUser) {
      this.usuario = currentUser;
    }
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.validateRole(this.usuario.rol);
  }
}
