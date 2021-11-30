import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCitasPsicologoComponent } from './consultar-citas-psicologo.component';

describe('ConsultarCitasPsicologoComponent', () => {
  let component: ConsultarCitasPsicologoComponent;
  let fixture: ComponentFixture<ConsultarCitasPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarCitasPsicologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarCitasPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
