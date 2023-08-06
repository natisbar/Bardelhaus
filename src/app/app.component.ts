import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from './core/models/menuItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private scroller: ViewportScroller){

  }

  ngOnInit(): void {
    // si hay un F5 para que redirija al inicio de la página
    this.scroller.scrollToAnchor("barra-navegacion");
  }

  title = 'Bardelhaus';
  public opciones: MenuItem[] = [
    {idUbicacion: 'nosotros', nombre: 'Nosotros'},
    {idUbicacion: 'servicios', nombre: 'Servicios'},
    {idUbicacion: 'proyectos', nombre: 'Proyectos'},
    {idUbicacion: 'contacto', nombre: 'Contacto'}
  ];
}
