import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesRegistroComponent } from './pacientes-registro.component';

describe('PacientesRegistroComponent', () => {
  let component: PacientesRegistroComponent;
  let fixture: ComponentFixture<PacientesRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
