import { Injectable } from '@angular/core';
import { HttpgeneralService } from '../../core/services/httpgeneral.service';
import { ResponseRequest } from '../models/responseRequest';

@Injectable()
export class ContactarService {

  constructor(protected http: HttpgeneralService) {}

  public guardar(endpoint: string, body: any, options?: any){
    return this.http.doPost(endpoint, body, options);
  }
}
