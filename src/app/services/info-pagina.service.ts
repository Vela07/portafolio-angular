import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) { 

    console.log('Servicio de InfoPagina');
    this.cargarInfo();
    this.cargarEquipo();
   
  }

  private cargarInfo(){
      //Leer el archivo JSON

      this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo(){
      //Leer el archivo JSON

      this.http.get('https://angular-template-71fd5.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {

        this.equipo = resp;
         // console.log(resp);
      });
  }

}
