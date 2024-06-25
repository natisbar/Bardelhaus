import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { Paths } from 'src/app/shared/Utils/paths';
import AOS from "aos";
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

const NOMBRE_IMAGEN = "img_seccion1.jpg";

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit, OnDestroy {
  public pathImagenes: string;
  description: string = '';
  teamTitle: string = '';
  teamMates: { name: string, profProfile: string }[] = [];
  contactBtnTitle: string = '';  
  private languageChangeSubscription!: Subscription;

  constructor(private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any,
              private translate: TranslateService){}

  public redirigirEnPagina(id:string): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: id
    });
  }

  ngOnInit(): void {
    AOS.init();
    this.pathImagenes = Paths.identificarPathImagenes(2) + NOMBRE_IMAGEN;
    this.loadTranslations();
    this.languageChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  ngOnDestroy(): void {
    this.languageChangeSubscription.unsubscribe();
  }

  loadTranslations(): void {
    this.translate.get('nosotros.description').subscribe((res: string) => {
      this.description = res;
    });
    this.translate.get('nosotros.teamTitle').subscribe((res: string) => {
      this.teamTitle = res;
    });
    this.translate.get('nosotros.teamMates').subscribe((res: any[]) => {
      this.teamMates = res;
    });
    this.translate.get('nosotros.contactBtnTitle').subscribe((res: string) => {
      this.contactBtnTitle = res;
    });
  }
}
