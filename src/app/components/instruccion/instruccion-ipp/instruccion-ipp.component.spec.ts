import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionIppComponent } from './instruccion-ipp.component';

describe('InstruccionIppComponent', () => {
  let component: InstruccionIppComponent;
  let fixture: ComponentFixture<InstruccionIppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstruccionIppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstruccionIppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
