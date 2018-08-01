import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class BioService {
  
  info: infoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) { 
    // console.log("Servicio ok!");
    
    this.http.get('assets/data/data-bio.json')
    .subscribe( (resp: infoPagina) => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    });

  }
}
