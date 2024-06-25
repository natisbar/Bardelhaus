import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from './core/models/menuItems';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Bardelhaus';
  public opciones: MenuItem[] = [];

  constructor(private scroller: ViewportScroller,
    public translate: TranslateService){

  }

  ngOnInit(): void {
    this.loadMenuItems();
    this.translate.onLangChange.subscribe(() => {
      this.loadMenuItems();
    });
    // si hay un F5 para que redirija al inicio de la página
    this.scroller.scrollToAnchor("barra-navegacion");
  }

  loadMenuItems(): void {
    this.translate.get('navbar.items').subscribe((res: MenuItem[]) => {
      this.opciones = res;
    });
  }
}
