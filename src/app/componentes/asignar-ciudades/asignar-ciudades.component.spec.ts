import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarCiudadesComponent } from './asignar-ciudades.component';

describe('AsignarCiudadesComponent', () => {
  let component: AsignarCiudadesComponent;
  let fixture: ComponentFixture<AsignarCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarCiudadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
