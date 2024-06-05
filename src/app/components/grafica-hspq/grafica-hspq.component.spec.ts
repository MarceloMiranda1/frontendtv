import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaHspqComponent } from './grafica-hspq.component';

describe('GraficaHspqComponent', () => {
  let component: GraficaHspqComponent;
  let fixture: ComponentFixture<GraficaHspqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaHspqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaHspqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
