import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionHspqComponent } from './informacion-hspq.component';

describe('InformacionHspqComponent', () => {
  let component: InformacionHspqComponent;
  let fixture: ComponentFixture<InformacionHspqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionHspqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionHspqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
