import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTratamientoComponent } from './consultar-tratamiento.component';

describe('ConsultarTratamientoComponent', () => {
  let component: ConsultarTratamientoComponent;
  let fixture: ComponentFixture<ConsultarTratamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarTratamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
