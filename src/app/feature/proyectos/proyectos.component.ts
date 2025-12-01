import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import AOS from "aos";
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TECHNOLOGY_ICONS } from 'src/app/shared/models/tecnologias';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ClientesComponent implements OnInit{

  projectTitle: string = '';
  projectItem: {
    id: string,
    imgUrl: string,
    projectType: string,
    projectName: string,
    projectUrl?: string,
    modalId?: number,
    modalTitle?:string,
    technologies: string[],
    modalContent?: string
  }[] = [];
  seeMoreBtn: string = '';
  private languageChangeSubscription!: Subscription;
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    items: 3,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  }

  public mostrarModal: boolean[] = [false, false, false];
  public modal = {
    titulo: "",
    contenido: ""
  }

  constructor(private translate: TranslateService){}

  ngOnInit(): void {
    AOS.init();
    this.loadTranslations();
    this.languageChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }


  public abrirModal(idModal?: number): void {
    if (idModal !== undefined) {
      this.mostrarModal = this.projectItem.map((item, i) => item.modalId === idModal);
    }
  }

  public cerrarModal(): void {
    this.mostrarModal = this.projectItem.map(() => false);
  }

  ngOnDestroy(): void {
    this.languageChangeSubscription.unsubscribe();
  }

  loadTranslations(): void {
    this.translate.get('proyectos.projectTitle').subscribe((res: string) => {
      this.projectTitle = res;
    });
    this.translate.get('proyectos.projectItem').subscribe((res: any[]) => {
      this.projectItem = res;
      this.mostrarModal = new Array(this.projectItem.length).fill(false);
    });
    this.translate.get('proyectos.seeMoreBtn').subscribe((res: string) => {
      this.seeMoreBtn = res;
    });
  }

  getIcon(name: string) {
  let ruta = TECHNOLOGY_ICONS.find(t => t.name === name.toUpperCase())?.icon
      || "";
  console.log(ruta);
  return ruta;
}

}
