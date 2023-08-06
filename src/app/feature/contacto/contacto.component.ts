import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { regularCharacterValidator } from 'src/app/shared/Utils/validadores/form.validacion';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  public isActive: string;
  public formAplicacion: FormGroup;
  public mostrarForm: boolean = true;


  async iniciarPeticionPost(){
    console.log(this.formAplicacion.value);
    console.log(this.formAplicacion.valid);

    if (this.formAplicacion.valid){
      const body = new URLSearchParams();
      body.set('entry.41887965', this.formAplicacion.value.id);
      body.set('entry.1256711967', this.formAplicacion.value.email);
      body.set('entry.1626840047', this.formAplicacion.value.cedula);
      body.set('entry.1959726330', this.formAplicacion.value.nombre);
      body.set('entry.1289675046', this.formAplicacion.value.telefono);
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

      // try {
      //   this.ofertaService.guardar(environmentForm.endpoint, body, options).subscribe({
      //     next: data => {
      //       console.log(data);
      //     },
      //     error: error =>{
      //       console.log(error);
      //       // this.mostrarForm = false;
      //     }
      //   })
      // } catch (error) {
      //   console.log("hubo error");
      //   console.log(error);
      // }

    }

  }

  public construirFormulario(){

    this.formAplicacion = new FormGroup({
      id: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      cedula: new FormControl("", [Validators.required, Validators.min(100000)]),
      nombre: new FormControl("", [Validators.required, Validators.minLength(6), regularCharacterValidator()]),
      telefono: new FormControl("", [Validators.required, Validators.min(1000000000)])
    });
  }

  get emailField() { return this.formAplicacion.get('email'); }
  get cedulaField() { return this.formAplicacion.get('cedula'); }
  get nombreField() { return this.formAplicacion.get('nombre'); }
  get telefonoField() { return this.formAplicacion.get('telefono'); }

  ngOnInit(){
    this.construirFormulario();
  }

}
