import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCitasPacienteComponent } from './consultar-citas-paciente.component';

describe('ConsultarCitasPacienteComponent', () => {
  let component: ConsultarCitasPacienteComponent;
  let fixture: ComponentFixture<ConsultarCitasPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarCitasPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarCitasPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
