import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Productos } from "src/app/models/productos";


@Injectable({
 providedIn: "root",
})
export class HomeService {

    constructor(
        private http: HttpClient
      ) {
      }

    getProductos(){
        return this.http.get<Productos[]>("http://localhost:8000/api/products");
    }
    

   

    

  }