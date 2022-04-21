import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CiudadesDisponibles } from 'src/app/models/ciudades';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  ciudadesList:CiudadesDisponibles[]=[];
  formularioProductos:FormGroup;

  ciudadesDisponibles = new FormControl();

  constructor(
     private service: FormularioService,
     private formBuilder: FormBuilder,
     private router: Router,
  ) {
      this.formularioProductos=this.formBuilder.group({
        nombre:["",Validators.required],
        imagen:[""],
        precio:["",Validators.required],
        cantidad:["",Validators.required],
        observaciones:["",Validators.required],
      })
   }

  ngOnInit(): void {
   
  }
  sendForm(){
    this.service.postProductos({
      ...this.formularioProductos.value
    }).subscribe((result) => {
      console.log(result)
      //this.router.navigate(["/asignarCiudades"]);
    });
  }
 
}
