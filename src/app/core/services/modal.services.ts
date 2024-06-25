import Swal, { SweetAlertIcon } from 'sweetalert2';

export class ModalNotificaciones {
  icono: SweetAlertIcon;
  imageUrl: string;
  texto: string;
  btnTxt: string;
  confirmButtonColor: string = 'black';

  public modalBasico(icono: SweetAlertIcon, texto: string, btn: string) {
    this.icono = icono;
    this.texto = texto;
    this.btnTxt = btn;
    return Swal.fire({
      icon: this.icono,
      text: this.texto,
      confirmButtonColor: this.confirmButtonColor,
      confirmButtonText: this.btnTxt,
    }).then((result) => {
      return result;
    });
  }
}
