import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { regularCharacterValidator } from 'src/app/shared/Utils/validadores/form.validacion';
import { ContactarService } from 'src/app/shared/service/contactar.service';
import { environmentForm } from 'src/environments/environment';
import AOS from "aos";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  public isActive: string;
  public formAplicacion: FormGroup;
  public mostrarForm: boolean = true;
  public mostrarModal: boolean = false;

  constructor(protected contactarService: ContactarService){

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
            this.mostrarModal = true;
            this.limpiarFormulario();
          }
        })
      } catch (error) {
        console.log(error);
      }

    }
  }

  private limpiarFormulario(){
    this.formAplicacion.reset();
  }

  public abrirModal(idModal: number){
    this.mostrarModal = true;
  }

  public cerrarModal(){
    this.mostrarModal = false
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
