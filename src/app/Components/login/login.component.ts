import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';
import { ModalComponent } from 'src/app/@base/modal/modal.component';
import { Paciente } from 'src/app/models/paciente';
import { Persona } from 'src/app/models/persona';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  paciente : Paciente;
  persona: Persona;
  constructor(private loginService: AuthenticationService, private modalService: NgbModal, private pacienteService: PacienteService) {
    this.user= new User();
    this.paciente = new Paciente();
    this.persona = new Persona();
   }

  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }


  add(){ 
    let a;
    this.persona.identification = this.paciente.codigoPaciente;
    this.paciente.persona = this.persona;
    this.pacienteService.post(this.paciente).subscribe((r) => {
      if (r != null) {
        a = r;
        const messageBox = this.modalService.open(ModalComponent);
        messageBox.componentInstance.title = "Resultado";
        messageBox.componentInstance.cuerpo = "Info: " + a.mensaje;
      }


    })
  }


  


  login(){
    this.loginService.login(this.user.password, this.user.User)
      .pipe(first())
      .subscribe(
        data => {
          //window.location.reload();
        },
        error => {
          console.log(error.error);
        }
      )
  }

}
