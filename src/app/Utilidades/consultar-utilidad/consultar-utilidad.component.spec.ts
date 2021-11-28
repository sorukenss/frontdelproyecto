import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarUtilidadComponent } from './consultar-utilidad.component';

describe('ConsultarUtilidadComponent', () => {
  let component: ConsultarUtilidadComponent;
  let fixture: ComponentFixture<ConsultarUtilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarUtilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarUtilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
