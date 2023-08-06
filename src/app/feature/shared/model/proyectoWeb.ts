import { Proyecto } from "./proyecto";

export class ProyectoWeb extends Proyecto{
  url: string;
  tipo: string;

  constructor(img: string, descripcion: string, url: string){
    super(img, descripcion);
    this.url = url;
  }
}
