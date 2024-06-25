import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NosotrosComponent } from './feature/nosotros/nosotros.component';
import { ServiciosComponent } from './feature/servicios/servicios.component';
import { ClientesComponent } from './feature/proyectos/proyectos.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ContactoComponent } from './feature/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '', component: AppComponent
  }
];

const routerOptions: ExtraOptions ={
  anchorScrolling: "enabled"
};


@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    ServiciosComponent,
    ClientesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule /* */,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    NosotrosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}