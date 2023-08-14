import { DOCUMENT} from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menuItems';
import AOS from "aos";
import { PageScrollService } from 'ngx-page-scroll-core';

const ITEM_IMPORTANTE = ["Contacto"];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  @Input()
  items: MenuItem[];
  imageToolbar:string;
  itemsRegulares:MenuItem[] = [];
  itemsImportante: MenuItem[] = [];

  constructor(private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any){}


  public redirigirEnPagina(id:string): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: id
    });
  }

  private definirUbicacionImagen(){
    let ubicacionActual = window.location.href;
    console.log(ubicacionActual)
    if (ubicacionActual.indexOf("localhost") > 0 || ubicacionActual.indexOf("127.0.0.1") > 0){
      this.imageToolbar = '../../../assets/image/bardelhaus_logon.png';
    }
    else {
      this.imageToolbar = "assets/image/bardelhaus_logon.png";
    }
  }

  private definirImportanciaItems(){
    this.items.forEach(item => {
      ITEM_IMPORTANTE.forEach(itemImportante => {
        if (item.nombre != itemImportante){
          this.itemsRegulares.push(item);
        }
        else {
          this.itemsImportante.push(item);
        }
      });
    });
    console.log(this.itemsRegulares);
    console.log(this.itemsImportante);
  }

  ngOnInit(){
    AOS.init();
    this.definirUbicacionImagen();
    this.definirImportanciaItems();
  }

}
