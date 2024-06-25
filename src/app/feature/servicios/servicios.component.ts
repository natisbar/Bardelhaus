import { Component, OnInit, OnDestroy } from '@angular/core';
import { Servicio } from '../shared/model/servicio';
import AOS from "aos";
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit, OnDestroy {

  servTitle: string = '';
  serviceItem: { imgUrl: string, servName: string, servDescription: string }[] = [];
  private languageChangeSubscription!: Subscription;

  constructor(private translate: TranslateService){}

  ngOnInit(): void {
    AOS.init();
    this.loadTranslations();
    this.languageChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  ngOnDestroy(): void {
    this.languageChangeSubscription.unsubscribe();
  }

  loadTranslations(): void {
    this.translate.get('servicios.servTitle').subscribe((res: string) => {
      this.servTitle = res;
    });
    this.translate.get('servicios.serviceItem').subscribe((res: any[]) => {
      this.serviceItem = res;
    });
  }
}
