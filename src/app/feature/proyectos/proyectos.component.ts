import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import { ResponseRequest } from 'src/app/shared/models/responseRequest';
import { ProyectoWeb } from '../shared/model/proyectoWeb';

const DESARROLLO_WEB: ProyectoWeb[] = [
  {
    img: "./assets/image/proyectos/webg.png",
    tipo: "Landing page:",
    descripcion: "Jesvalstore",
    url: "https://jesvalstore.com"
  },
  {
    img: "./assets/image/proyectos/webg.png",
    tipo: "Landing page:",
    descripcion: "Construm Caceres",
    url: "https://www.espaciosconstrumcaceres.com"
  },
  {
    img: "./assets/image/proyectos/webg.png",
    tipo: "Web page",
    descripcion: "Egresados UNAD",
    url: "https://egresados-unad.site"
  }

];

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ClientesComponent implements OnInit{

  public proyectosWeb: ProyectoWeb[] = DESARROLLO_WEB;
  public clienteActual: number = 0;
  public responseRequest!: ResponseRequest;

  constructor(protected clienteService: ClienteService){}

  ngOnInit(): void {

  }




}
