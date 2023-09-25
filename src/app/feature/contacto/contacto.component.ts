import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { regularCharacterValidator } from 'src/app/shared/Utils/validadores/form.validacion';
import { ContactarService } from 'src/app/shared/service/contactar.service';
import { environmentForm } from 'src/environments/environment';
import AOS from "aos";
import { SweetAlertIcon } from 'sweetalert2';
import { ModalNotificaciones } from 'src/app/core/services/modal.services';

const SATISFACTORIO_ICON: SweetAlertIcon = 'success';
const ERROR_ICON: SweetAlertIcon = 'error';
const SOLICITUD_EXITOSA: string = 'Tu mensaje ha sido enviada exitosamente.';
const INFORMACION_INCOMPLETA: string = 'Por favor diligencie todos los campos marcados como obligatorios.';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  public isActive: string;
  public formAplicacion: FormGroup;
  public mostrarForm: boolean = true;

  constructor(protected contactarService: ContactarService,
              private modalNotificaciones: ModalNotificaciones){

  }
  async iniciarPeticionPost(){
    console.log(this.formAplicacion.value);
    console.log(this.formAplicacion.valid);

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
            this.modalNotificaciones.modalBasico(SATISFACTORIO_ICON, SOLICITUD_EXITOSA)
          }
        })
      } catch (error) {
        console.log(error);
      }

    }
    else{
      this.modalNotificaciones.modalBasico(ERROR_ICON, INFORMACION_INCOMPLETA);
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
  }

}
