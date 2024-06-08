import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionGraficoComponent } from './instruccion-grafico.component';

describe('InstruccionGraficoComponent', () => {
  let component: InstruccionGraficoComponent;
  let fixture: ComponentFixture<InstruccionGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstruccionGraficoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstruccionGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
