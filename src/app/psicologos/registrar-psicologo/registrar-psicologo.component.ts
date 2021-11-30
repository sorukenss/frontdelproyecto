import { Component, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/models/especialidad';
import { Persona } from 'src/app/models/persona';
import { psicologo } from 'src/app/models/psicologo';
import { PsicologoService } from 'src/app/services/psicologo.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Agenda } from 'src/app/models/agenda';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../@base/modal/modal.component';
@Component({
  selector: 'app-registrar-psicologo',
  templateUrl: './registrar-psicologo.component.html',
  styleUrls: ['./registrar-psicologo.component.css']
})
export class RegistrarPsicologoComponent implements OnInit {
  formGroup: FormGroup;
  Psicologo: psicologo;
  persona: Persona;
  especialidad: Especialidad;
  Visible: boolean = false;
  date8: Date;
  dia: string;
  agenda: Agenda;
  agendas: Agenda[] = [];
  filtro: any[] = [];

  dias = {
    'lunes': [],
    'martes': [],
    'miercoles': [],
    'jueves': [],
    'viernes': [],
    'sabado': [],
    'numero': []
  };

  constructor(private psicologoService: PsicologoService, private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.Psicologo = new psicologo();
    this.persona = new Persona();
    this.especialidad = new Especialidad();
  }

  ngOnInit(): void {
    this.buildForm();
  }
  add() {

    let a;
    if (this.validate()) {
      const messageBox = this.modalService.open(ModalComponent);
          messageBox.componentInstance.title = "Resultado";
          messageBox.componentInstance.cuerpo = "Info: Debe agregar mínimo 8 horarios a la agenda";
    } else {
      this.especialidad = this.formGroup.value;
      this.persona = this.formGroup.value;
      this.Psicologo.codigoPsicologo = this.persona.identification;
      this.Psicologo.persona = this.persona;
      this.Psicologo.especialidad = this.especialidad;
      this.Psicologo.agendas = this.agendas;
      this.psicologoService.post(this.Psicologo).subscribe((r) => {
        if (r != null) {
          a = r;
          const messageBox = this.modalService.open(ModalComponent);
          messageBox.componentInstance.title = "Resultado";
          messageBox.componentInstance.cuerpo = "Info: " + a.mensaje;
        }
      })
    }


  }
  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
  }

  validate() {
    if (this.agendas.length < 8) {
      return true;
    }
    return false;
  }
  mostrar() {
    this.agenda = new Agenda();
    this.agenda.hora = this.date8.getHours() + "." + this.date8.getMinutes();
    this.agenda.dia = this.dia;
    if (this.dia == 'lunes') {
      if (this.dias.lunes.length == 5) {
        alert("Ya alcanzó el número máximo de citas por días ")
      } else {
        this.dias.lunes.push(Number(this.agenda.hora));
        this.dias.lunes = this.dias.lunes.sort((n1, n2) => n1 - n2);
        this.agendas.push(this.agenda);
      }
    } else if (this.dia == 'martes') {
      if (this.dias.martes.length == 5) {
        alert("Ya alcanzó el número máximo de citas por días ")
      } else {
        this.dias.martes.push(Number(this.agenda.hora));
        this.dias.martes = this.dias.martes.sort((n1, n2) => n1 - n2);
        this.agendas.push(this.agenda);
      }
    } else if (this.dia == 'miercoles') {
      if (this.dias.miercoles.length == 5) {
        alert("Ya alcanzó el número máximo de citas por días ")
      } else {
        this.dias.miercoles.push(Number(this.agenda.hora));
        this.dias.miercoles = this.dias.miercoles.sort((n1, n2) => n1 - n2);
        this.agendas.push(this.agenda);
      }
    } else if (this.dia == 'jueves') {
      if (this.dias.jueves.length == 5) {
        alert("Ya alcanzó el número máximo de citas por días ")
      } else {
        this.dias.jueves.push(Number(this.agenda.hora));
        this.dias.jueves = this.dias.jueves.sort((n1, n2) => n1 - n2);
        this.agendas.push(this.agenda);
      }
    } else if (this.dia == 'viernes') {
      if (this.dias.viernes.length == 5) {
        alert("Ya alcanzó el número máximo de citas por días ")
      } else {
        this.dias.viernes.push(Number(this.agenda.hora));
        this.dias.viernes = this.dias.viernes.sort((n1, n2) => n1 - n2);
        this.agendas.push(this.agenda);
      }
    } else if (this.dia == 'sabado') {
      if (this.dias.sabado.length == 3) {
        alert("Ya alcanzó el número máximo de citas por días ")
      } else {
        this.dias.sabado.push(Number(this.agenda.hora));
        this.dias.sabado = this.dias.sabado.sort((n1, n2) => n1 - n2);
        this.agendas.push(this.agenda);
      }
    }
    var numeros = 0;
    var tempDias = [this.dias.lunes.length, this.dias.martes.length, this.dias.miercoles.length, this.dias.jueves.length, this.dias.viernes.length, this.dias.sabado.length];
    for (var i = 0; i < 6; i++) {
      if (tempDias[i] > numeros) {
        numeros = tempDias[i];
      }
    }

    this.dias.numero = [];
    for (var i = 0; i < numeros; i++) {
      this.dias.numero.push(0);
    }

  }



  private buildForm() {
    this.Psicologo = new psicologo();
    this.persona = new Persona();
    this.especialidad = new Especialidad();
    this.persona.TipoDeIdentificacion='CC';
    this.especialidad.nombreEspecialidad = "";
    this.persona.identification = "";
    this.persona.nombre = '';
    this.persona.apellido = '';
    this.persona.correo = '';
    this.persona.direccion = '';
    this.persona.edad = 0;
    this.persona.passwordd = '';
    this.persona.sexo = '';
    this.persona.telefono = '';
    this.persona.usuario = '';
    this.formGroup = this.formBuilder.group({
      identification: [this.persona.identification, Validators.required],
      nombre: [this.persona.nombre, Validators.required],
      apellido: [this.persona.apellido, Validators.required],
      correo: [this.persona.correo, Validators.required],
      direccion: [this.persona.direccion, Validators.required],
      edad: [this.persona.edad, [Validators.required, RegistrarPsicologoComponent.validationEdad ]],
      passwordd: [this.persona.passwordd, Validators.required],
      sexo: [this.persona.sexo, Validators.required],
      telefono: [this.persona.telefono, Validators.required,Validators.maxLength(10)],
      usuario: [this.persona.usuario, Validators.required],
      nombreEspecialidad: [this.especialidad.nombreEspecialidad, Validators.required],
    })
  }
   
  get control() {
    return this.formGroup.controls;
  }

  private static validationEdad(control:AbstractControl){
     
    const edad=control.value;
    if(edad<=0 || edad>=100){
      return{validEdad:true, messageEdad:"Edad invalidad(1-99)"}
    }
    return {validEdad: false, messageEdad:"Edad valida"}
  }

}
