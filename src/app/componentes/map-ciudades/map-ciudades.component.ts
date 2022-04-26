import { OnInit,Component } from '@angular/core';
import { circleMarker, icon, Map,Marker,marker,tileLayer } from 'leaflet';
import {Router} from '@angular/router';
import { MapCiudadesService } from './map-ciudades.service';
import { ProductosCiudades } from 'src/app/models/productosCiudades';


@Component({
  selector: 'app-map-ciudades',
  templateUrl: './map-ciudades.component.html',
  styleUrls: ['./map-ciudades.component.css']
})
export class MapCiudadesComponent implements OnInit {

  ngAfterViewInit(): void {
    const map = new Map('map').setView([4.580,-73.872], 5);
    tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',{
        maxZoom: 18,
        minZoom: 2,
        attribution: '&copy; <a href="http:/github.com/cycloms.cartocss-style/releases" title="cyclosm"</a>'
      }).addTo(map);
    
      const markerItem = circleMarker([3.4424, -76.5246]).addTo(map).bindPopup("santiago de cali marcador");

      map.fitBounds([
        [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
      ]);
  }
  
   
  productoCiudades:ProductosCiudades[]=[];
  constructor(
    private service: MapCiudadesService,
    private router: Router,
    
  ) { }
   
    ngOnInit(): void {
      this.service.getProductos().subscribe(data =>{
        this.productos = data;
        console.log(data)
    }
   
   
   
    

   
       
      }
    