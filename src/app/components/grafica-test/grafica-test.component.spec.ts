import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaTestComponent } from './grafica-test.component';

describe('GraficaTestComponent', () => {
  let component: GraficaTestComponent;
  let fixture: ComponentFixture<GraficaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
