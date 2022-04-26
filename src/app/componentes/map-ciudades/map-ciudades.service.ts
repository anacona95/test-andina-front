import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Productos } from "src/app/models/productos";
import { ProductosCiudades} from "src/app/models/productosCiudades";



@Injectable({
 providedIn: "root",
})
export class MapCiudadesService {

    constructor(
        private http: HttpClient
      ) {
      }

    getProductoCiudades(){
      return this.http.get<ProductosCiudades>("http://localhost:8000/api/productCities{id}");
  }



    

   

    

  }