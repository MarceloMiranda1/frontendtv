import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionEncuestaComponent } from './informacion-encuesta.component';

describe('InformacionEncuestaComponent', () => {
  let component: InformacionEncuestaComponent;
  let fixture: ComponentFixture<InformacionEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionEncuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
