import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaIppComponent } from './grafica-ipp.component';

describe('GraficaIppComponent', () => {
  let component: GraficaIppComponent;
  let fixture: ComponentFixture<GraficaIppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaIppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaIppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
