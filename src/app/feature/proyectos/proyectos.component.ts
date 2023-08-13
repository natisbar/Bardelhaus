import { Component, OnInit } from '@angular/core';
import { ProyectoWeb } from '../shared/model/proyectoWeb';
import AOS from "aos";

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
  public mostrarModal: boolean[] = [false, false, false];
  public modal = {
    titulo: "",
    contenido: ""
  }


  constructor(){}

  ngOnInit(): void {
    AOS.init();
  }


  public abrirModal(idModal: number){
    switch (idModal) {
      case 1:
        this.mostrarModal = [true, false, false];
        break;
      case 2:
        this.mostrarModal = [false, true, false];
        break;
      case 3:
        this.mostrarModal = [false, false, true];
        break;
      default:
        break;
    }
  }

  public cerrarModal(){
    this.mostrarModal = [false, false, false];
  }



}
