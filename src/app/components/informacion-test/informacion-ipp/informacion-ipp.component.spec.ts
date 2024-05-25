import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionIppComponent } from './informacion-ipp.component';

describe('InformacionIppComponent', () => {
  let component: InformacionIppComponent;
  let fixture: ComponentFixture<InformacionIppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionIppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionIppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
