
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ContactarService } from "./service/contactar.service";
import { HttpClientModule } from "@angular/common/http";
import { NgxPageScrollModule } from "ngx-page-scroll";
import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [

  ],
  imports: [
    ReactiveFormsModule,
    NgxPageScrollCoreModule.forRoot({duration: 1000, scrollOffset: 100}),
    NgxPageScrollModule,
    MatCardModule,
    MatTooltipModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatTooltipModule
  ],
  providers: [ContactarService]
})
export class SharedModule {}
