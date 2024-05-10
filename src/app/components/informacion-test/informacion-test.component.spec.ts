import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionTestComponent } from './informacion-test.component';

describe('InformacionTestComponent', () => {
  let component: InformacionTestComponent;
  let fixture: ComponentFixture<InformacionTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
