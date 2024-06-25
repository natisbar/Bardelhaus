import { DOCUMENT} from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from '../../models/menuItems';
import AOS from "aos";
import { PageScrollService } from 'ngx-page-scroll-core';
import { TranslateService } from '@ngx-translate/core';


const ITEM_IMPORTANTE = ["contacto"];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  @Output() languageChange = new EventEmitter<string>();

  @Input() items: MenuItem[];
  imageToolbar:string;
  itemsRegulares:MenuItem[] = [];
  itemsImportante: MenuItem[] = [];
  currentLang: string;

  constructor(private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    this.currentLang = localStorage.getItem('currentLang') || 'es'; // Initialize from localStorage
    this.translate.use(this.currentLang);
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
      localStorage.setItem('currentLang', this.currentLang); // Save to localStorage on language change
    });
  }


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

  private definirImportanciaItems() {
    this.itemsRegulares = [];
    this.itemsImportante = [];
    this.items.forEach(item => {
      if (ITEM_IMPORTANTE.includes(item.idUbicacion)) {
        this.itemsImportante.push(item);
        
      } else {
        this.itemsRegulares.push(item);
      }
    });
  }

  ngOnInit(){
    AOS.init();
    this.definirUbicacionImagen();
    this.definirImportanciaItems();
  }

  ngOnChanges() {
    this.definirImportanciaItems();
  }

  switchLang(checked: boolean) {
    const lang = checked ? 'en' : 'es';
    this.translate.use(lang);
    this.languageChange.emit(lang);
  }
}
