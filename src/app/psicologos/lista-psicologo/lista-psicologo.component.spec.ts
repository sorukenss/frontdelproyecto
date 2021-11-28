import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPsicologoComponent } from './lista-psicologo.component';

describe('ListaPsicologoComponent', () => {
  let component: ListaPsicologoComponent;
  let fixture: ComponentFixture<ListaPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPsicologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
