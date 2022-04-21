import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CiudadesDisponibles } from "src/app/models/ciudades";
import { Productos } from "src/app/models/productos";

@Injectable({
 providedIn: "root",
})
export class FormularioService {

    constructor(
        private http: HttpClient
      ) {
      }

    getCiudades(){
        return this.http.get<CiudadesDisponibles[]>("http://localhost:8000/api/cities");

    }
    postProductos(request:Productos){
      return this.http.post<Productos>("http://localhost:8000/api/productos",request);
  }

    

  }