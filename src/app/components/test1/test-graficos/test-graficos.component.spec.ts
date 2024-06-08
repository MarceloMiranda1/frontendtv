import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGraficosComponent } from './test-graficos.component';

describe('TestGraficosComponent', () => {
  let component: TestGraficosComponent;
  let fixture: ComponentFixture<TestGraficosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestGraficosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
