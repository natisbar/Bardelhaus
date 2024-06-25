import { CommonModule} from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HttpgeneralService } from "./services/httpgeneral.service";
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ModalNotificaciones } from "./services/modal.services";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [
    HttpgeneralService,
    ModalNotificaciones
  ]
})
export class CoreModule {}
