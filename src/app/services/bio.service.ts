import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class BioService {
  
  info: infoPagina = {};
  cargando = true;
  equipo: any[] = [];

  constructor(private http: HttpClient) { 
    // console.log("Servicio ok!");
    
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // Leer archivo Json
    this.http.get('assets/data/data-bio.json')
    .subscribe( (resp: infoPagina) => {
      this.cargando = false;
      this.info = resp;
      // console.log(resp);
    });
  }

  private cargarEquipo(){
    this.http.get('https://data-bio.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {
      this.cargando = false;
      this.equipo = resp;
      // console.log(resp);
    });
  }



}
