import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSisComponent } from './redes-sis.component';

describe('RedesSisComponent', () => {
  let component: RedesSisComponent;
  let fixture: ComponentFixture<RedesSisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesSisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesSisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
