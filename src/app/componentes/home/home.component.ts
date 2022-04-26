import { Component, OnInit } from '@angular/core';
import { Productos} from 'src/app/models/productos';
import {Router} from '@angular/router';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos:Productos[]=[];
  constructor(
    private service: HomeService,
    
    private router: Router,
    
  ) { }


  ngOnInit(): void {
    this.service.getProductos().subscribe(data =>{
      this.productos = data;
      console.log(data)
    })
  }

  crear(){
    this.router.navigate(['/formulario'])

  }
  

}
