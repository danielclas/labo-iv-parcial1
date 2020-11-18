import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPaisComponent } from './detalles-pais.component';

describe('DetallesPaisComponent', () => {
  let component: DetallesPaisComponent;
  let fixture: ComponentFixture<DetallesPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
