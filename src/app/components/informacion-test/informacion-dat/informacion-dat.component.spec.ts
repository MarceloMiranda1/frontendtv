import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionDatComponent } from './informacion-dat.component';

describe('InformacionDatComponent', () => {
  let component: InformacionDatComponent;
  let fixture: ComponentFixture<InformacionDatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionDatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
