import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPsicologoComponent } from './mostrar-psicologo.component';

describe('MostrarPsicologoComponent', () => {
  let component: MostrarPsicologoComponent;
  let fixture: ComponentFixture<MostrarPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPsicologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
