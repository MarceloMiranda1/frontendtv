import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionHspqComponent } from './instruccion-hspq.component';

describe('InstruccionHspqComponent', () => {
  let component: InstruccionHspqComponent;
  let fixture: ComponentFixture<InstruccionHspqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstruccionHspqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstruccionHspqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
