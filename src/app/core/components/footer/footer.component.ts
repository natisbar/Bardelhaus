import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  imageToolbar:string;
  text1: string = '';
  text2: string = '';    
  private languageChangeSubscription!: Subscription;

  constructor(private translate: TranslateService){}

  ngOnInit(){
    let ubicacionActual = window.location.href;
    console.log(ubicacionActual)
    if (ubicacionActual.indexOf("localhost") > 0 || ubicacionActual.indexOf("127.0.0.1") > 0){
      this.imageToolbar = '../../../assets/image/bardelhaus_logon.png';
    }
    else {
      this.imageToolbar = "assets/image/bardelhaus_logon.png";
    }
    this.loadTranslations();
    this.languageChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
  ngOnDestroy(): void {
    this.languageChangeSubscription.unsubscribe();
  }

  loadTranslations(): void {
    this.translate.get('footer.text1').subscribe((res: string) => {
      this.text1 = res;
    });
    this.translate.get('footer.text2').subscribe((res: string) => {
      this.text2 = res;
    });
  }
}
