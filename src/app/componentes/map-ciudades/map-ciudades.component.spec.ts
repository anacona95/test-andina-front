import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCiudadesComponent } from './map-ciudades.component';

describe('MapCiudadesComponent', () => {
  let component: MapCiudadesComponent;
  let fixture: ComponentFixture<MapCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapCiudadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
