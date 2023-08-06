import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NosotrosComponent } from './feature/nosotros/nosotros.component';
import { ServiciosComponent } from './feature/servicios/servicios.component';
import { ClientesComponent } from './feature/proyectos/proyectos.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactoComponent } from './feature/contacto/contacto.component';

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
    SharedModule
  ],
  exports: [
    NosotrosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
