import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { regularCharacterValidator } from 'src/app/shared/Utils/validadores/form.validacion';
import { ContactarService } from 'src/app/shared/service/contactar.service';
import { environmentForm } from 'src/environments/environment';
import AOS from "aos";
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SweetAlertIcon } from 'sweetalert2';
import { ModalNotificaciones } from 'src/app/core/services/modal.services';

const SATISFACTORIO_ICON: SweetAlertIcon = 'success';
const ERROR_ICON: SweetAlertIcon = 'error';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  public isActive: string;
  public formAplicacion: FormGroup;
  public mostrarForm: boolean = true;
  contactTitle: string = '';
  nameFieldName: string = '';
  reqFieldName: string = '';
  nameFieldValid: string = '';
  phoneFieldName: string = '';
  phoneFieldValid: string = '';
  emailFieldName: string = '';
  emailFieldValid: string = '';
  contactFieldName: string = '';
  messageFieldName: string = '';
  sendBtnName: string = '';
  responseField: string = '';
  successRequest: string = '';
  incompleteInfo: string = '';
  modalBtn: string = '';
  private languageChangeSubscription!: Subscription;

  constructor(protected contactarService: ContactarService,
              private modalNotificaciones: ModalNotificaciones,
              private translate: TranslateService){

  }
  async iniciarPeticionPost(){
    if (this.formAplicacion.valid){
      const body = new URLSearchParams();
      body.set('entry.792602600', this.formAplicacion.value.nombre);
      body.set('entry.1391419423', this.formAplicacion.value.email);
      body.set('entry.417843217', this.formAplicacion.value.telefono);
      body.set('entry.866507764', this.formAplicacion.value.medioPreferido);
      body.set('entry.121487989', this.formAplicacion.value.mensaje);
      let options = {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        )
      };

      try {
        this.contactarService.guardar(environmentForm.endpoint, body, options).subscribe({
          next: data => {
            console.log(data);
          },
          error: error =>{
            console.log(error.message);
            this.limpiarFormulario();
            this.modalNotificaciones.modalBasico(SATISFACTORIO_ICON, this.successRequest, this.modalBtn)
          }
        })
      } catch (error) {
        console.log(error);
      }

    }
    else{
      this.modalNotificaciones.modalBasico(ERROR_ICON, this.incompleteInfo, this.modalBtn);
    }
  }

  private limpiarFormulario(){
    this.formAplicacion.reset();
  }

  public construirFormulario(){

    this.formAplicacion = new FormGroup({
      nombre: new FormControl("", [Validators.required, Validators.minLength(6), regularCharacterValidator()]),
      email: new FormControl("", [Validators.required, Validators.email]),
      telefono: new FormControl("", [Validators.required, Validators.min(100000)]),
      medioPreferido: new FormControl("TELEFONO", [Validators.required]),
      mensaje: new FormControl("", [Validators.required])
    });
  }

  get emailField() { return this.formAplicacion.get('email'); }
  get medioPreferidoField() { return this.formAplicacion.get('medioPreferido'); }
  get nombreField() { return this.formAplicacion.get('nombre'); }
  get telefonoField() { return this.formAplicacion.get('telefono'); }
  get mensajeField() { return this.formAplicacion.get('mensaje'); }


  ngOnInit(){
    AOS.init();
    this.construirFormulario();
    this.loadTranslations();
    this.languageChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  ngOnDestroy(): void {
    this.languageChangeSubscription.unsubscribe();
  }

  loadTranslations(): void {
    this.translate.get('contacto.contactTitle').subscribe((res: string) => {
      this.contactTitle = res;
    });
    this.translate.get('contacto.nameFieldName').subscribe((res: string) => {
      this.nameFieldName = res;
    });
    this.translate.get('contacto.reqFieldName').subscribe((res: string) => {
      this.reqFieldName = res;
    });
    this.translate.get('contacto.nameFieldValid').subscribe((res: string) => {
      this.nameFieldValid = res;
    });
    this.translate.get('contacto.phoneFieldName').subscribe((res: string) => {
      this.phoneFieldName = res;
    });
    this.translate.get('contacto.phoneFieldValid').subscribe((res: string) => {
      this.phoneFieldValid = res;
    });
    this.translate.get('contacto.emailFieldName').subscribe((res: string) => {
      this.emailFieldName = res;
    });
    this.translate.get('contacto.emailFieldValid').subscribe((res: string) => {
      this.emailFieldValid = res;
    });
    this.translate.get('contacto.contactFieldName').subscribe((res: string) => {
      this.contactFieldName = res;
    });
    this.translate.get('contacto.messageFieldName').subscribe((res: string) => {
      this.messageFieldName = res;
    });
    this.translate.get('contacto.sendBtnName').subscribe((res: string) => {
      this.sendBtnName = res;
    });
    this.translate.get('contacto.responseField').subscribe((res: string) => {
      this.responseField = res;
    });
    this.translate.get('contacto.successRequest').subscribe((res: string) => {
      this.successRequest = res;
    });
    this.translate.get('contacto.incompleteInfo').subscribe((res: string) => {
      this.incompleteInfo = res;
    });
    this.translate.get('contacto.modalBtn').subscribe((res: string) => {
      this.modalBtn = res;
    });
  }
}
