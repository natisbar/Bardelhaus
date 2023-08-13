import { Component, OnInit } from '@angular/core';
import { Servicio } from '../shared/model/servicio';
import AOS from "aos";

const SERVICIOS: Servicio[] = [
  {
    img: "./assets/image/servicios/cursob.png",
    nombre: "Cursos",
    descripcion: "Diseño microcurricular y tecnopedagógico de cursos.",
  },
  {
    img: "./assets/image/servicios/recursob.png",
    nombre: "Recursos educativos digitales",
    descripcion: "Diseño instruccional y creación de recursos.",
  },
  {
    img: "./assets/image/servicios/webb.png",
    nombre: "Desarrollo web",
    descripcion: "Desarrollo de páginas web y landing pages.",
  },
];

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  public servicios: Servicio[] = SERVICIOS;

  ngOnInit(): void {
    AOS.init();
  }
}
