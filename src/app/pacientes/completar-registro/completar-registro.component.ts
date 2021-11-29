import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paciente } from 'src/app/models/paciente';
import { Persona } from 'src/app/models/persona';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-completar-registro',
  templateUrl: './completar-registro.component.html',
  styleUrls: ['./completar-registro.component.css']
})
export class CompletarRegistroComponent implements OnInit {
  formGroup: FormGroup;
  paciente: Paciente;
  usuario: User;
  persona : Persona;
  constructor(private pacienteService: PacienteService, private loginService: AuthenticationService,private formBuilder: FormBuilder) {
    let currentUser = this.loginService.currentUserValue;
    this.usuario=currentUser;
   }

  
  ngOnInit(): void {
    this.buildForm();
    this.getById();
    
  }

  getById() {
    let response;
    this.pacienteService.getById(this.usuario.idPersona).subscribe((r) => {
      response = r;
      console.log(r);
      this.paciente = response.paciente;
      this.persona=this.paciente.persona;
    })
  }

  update(){
    let response;
    this.paciente.codigoPaciente=this.paciente.persona.identification;
    this.pacienteService.update(this.paciente).subscribe(r=>{
      response=r
    })
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.update();
  }
  private buildForm() {
     

     this.persona.TipoDeIdentificacion= '';
     this.persona.identification = this.paciente.codigoPaciente;
    this.persona.nombre = '';
    this.persona.apellido = '';
    this.persona.correo = '';
    this.persona.direccion = '';
    this.persona.edad = 0;
    this.persona.sexo = '';
    this.persona.telefono = '';
    this.persona.passwordd =this.paciente.persona.passwordd;
    this.persona.usuario = this.paciente.persona.usuario;
    this.formGroup = this.formBuilder.group({
      identification: [this.persona.identification, Validators.required],
      nombre: [this.persona.nombre, Validators.required],
      apellido: [this.persona.apellido, Validators.required],
      correo: [this.persona.correo, Validators.required],
      direccion: [this.persona.direccion, Validators.required],
      edad: [this.persona.edad, [Validators.required, CompletarRegistroComponent.validationEdad ]],
      sexo: [this.persona.sexo, Validators.required],
      telefono: [this.persona.telefono, Validators.required,Validators.maxLength(10)],
      usuario: [this.persona.usuario, Validators.required],
      password: [this.persona.passwordd, Validators.required],
     
    })
  }
   
  get control() {
    return this.formGroup.controls;
  }

  private static validationEdad(control:AbstractControl){
     
    const edad=control.value;
    if(edad<=0 || edad>=100){
      return{validEdad:true, messageEdad:"Edad invalidad(1-99)"};
    }
    return {validEdad: false, messageEdad:"Edad valida"};
  }



}
