
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ContactarService } from "./service/contactar.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [

  ],
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactarService]
})
export class SharedModule {}
