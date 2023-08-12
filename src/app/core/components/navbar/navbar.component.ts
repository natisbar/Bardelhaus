import { DOCUMENT} from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menuItems';
// import { trigger, style, animate, transition, state } from '@angular/animations';
import { PageScrollService } from 'ngx-page-scroll-core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  @Input()
  items: MenuItem[];
  imageToolbar:string;

  constructor(private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any){}


  public redirigirEnPagina(id:string): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: id
    });
  }

  ngOnInit(){
    let ubicacionActual = window.location.href;
    console.log(ubicacionActual)
    if (ubicacionActual.indexOf("localhost") > 0 || ubicacionActual.indexOf("127.0.0.1") > 0){
      this.imageToolbar = '../../../assets/image/bardelhaus_logo.png';
    }
    else {
      this.imageToolbar = "assets/image/bardelhaus_logo.png";
    }
  }

}
