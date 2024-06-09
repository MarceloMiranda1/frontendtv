import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloSisComponent } from './modulo-sis.component';

describe('ModuloSisComponent', () => {
  let component: ModuloSisComponent;
  let fixture: ComponentFixture<ModuloSisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloSisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloSisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
