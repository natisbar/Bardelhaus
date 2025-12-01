import { Component, OnInit, OnDestroy } from '@angular/core';
import AOS from "aos";
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit, OnDestroy {

  servTitle: string = '';
  serviceItem: { id: string, imgUrl: string, servName: string, servDescription: string }[] = [];
  private languageChangeSubscription!: Subscription;
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    items: 4,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  }

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
