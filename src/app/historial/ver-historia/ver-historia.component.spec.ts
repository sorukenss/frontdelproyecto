import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerHistoriaComponent } from './ver-historia.component';

describe('VerHistoriaComponent', () => {
  let component: VerHistoriaComponent;
  let fixture: ComponentFixture<VerHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
