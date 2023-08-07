import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { regularCharacterValidator } from 'src/app/shared/Utils/validadores/form.validacion';
import { ContactarService } from 'src/app/shared/service/contactar.service';
import { environmentForm } from 'src/environments/environment';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  public isActive: string;
  public formAplicacion: FormGroup;
  public mostrarForm: boolean = true;

  constructor(protected contactarService: ContactarService){

  }
  async iniciarPeticionPost(){
    console.log(this.formAplicacion.value);
    console.log(this.formAplicacion.valid);

    if (this.formAplicacion.valid){
      const body = new URLSearchParams();
      body.set('entry.273303349', this.formAplicacion.value.nombre);
      body.set('entry.857158303', this.formAplicacion.value.email);
      body.set('entry.228355037', this.formAplicacion.value.telefono);
      body.set('entry.484913548', this.formAplicacion.value.medioPreferido);
      body.set('entry.454607529', this.formAplicacion.value.mensaje);
      let options = {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        )
        // params: new HttpParams().set(
        //   'key',
        //   environmentForm.key
        // )
      };

      try {
        this.contactarService.guardar(environmentForm.endpoint, body, options).subscribe({
          next: data => {
            console.log(data);
          },
          error: error =>{
            console.log(error);
            // this.mostrarForm = false;
          }
        })
      } catch (error) {
        console.log("hubo error");
        console.log(error);
      }

    }

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
    this.construirFormulario();
  }

}
