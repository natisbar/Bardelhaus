import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import AOS from "aos";
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ClientesComponent implements OnInit{

  projectTitle: string = '';
  projectItem: { imgUrl: string, projectType: string, projectName: string, projectUrl?: string, modalId?: number, modalTitle?:string, modalContent?: string }[] = [];  
  seeMoreBtn: string = '';
  private languageChangeSubscription!: Subscription;

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

}
