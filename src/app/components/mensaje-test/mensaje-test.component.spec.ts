import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeTestComponent } from './mensaje-test.component';

describe('MensajeTestComponent', () => {
  let component: MensajeTestComponent;
  let fixture: ComponentFixture<MensajeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
