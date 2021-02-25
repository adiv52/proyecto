import { Injectable } from '@angular/core';
import { Llista } from '../llista/llista';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map,filter} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LlistaService {
  llistaList: Llista[] = [{
    "id": "1", 
    "fecha": "13/02/2021", 
    "hora": "17:00-18:00", 
    "reservada": false ,
    "trabajador": "Antonio", 
    "descripcion": "Cita disponible para reparacion de equipos"},
{
    "id": "2", 
    "fecha": "13/02/2021", 
    "hora": "18:00-19:00", 
    "reservada": true ,
    "trabajador": "Juan", 
    "descripcion": "Cita disponible para instalacion de Software"},
{
    "id": "3", 
    "fecha": "13/02/2021", 
    "hora": "16:00-17:00", 
    "reservada": false ,
    "trabajador": "Vicente", 
    "descripcion": "Cita disponible para desarrollo de paginas web"}]
  private llistaURL = '/assets/llista.json';
  constructor( private http: HttpClient ) {}
  getLlista(): Observable<Llista[]>{ 
  return this.http.get<{llista: Llista[]}>(this.llistaURL).pipe( 
    map(response => response.llista)
    );
  }
  
}
