import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { Paths } from 'src/app/shared/Utils/paths';

const NOMBRE_IMAGEN = "img_seccion1.jpg";

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  public pathImagenes: string;

  constructor(private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any){}

  public redirigirEnPagina(id:string): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: id
    });
  }

  ngOnInit(): void {
    this.pathImagenes = Paths.identificarPathImagenes(2) + NOMBRE_IMAGEN;
  }
}
