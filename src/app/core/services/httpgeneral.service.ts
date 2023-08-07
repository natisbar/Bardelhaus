import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpgeneralService {

  constructor(public http: HttpClient) {}

  public doPost(endpoint: string, body: any,  options?: any){
    return this.http.post<any>(endpoint, body, options);
  }

  public doGet<T>(url: string, data: any){
    return this.http.get<T>(url, {params: data})
  }

  getHttpHeaders(): HttpHeaders {
    return new HttpHeaders().set('xhr-name', 'consultar registros');
  }
}
