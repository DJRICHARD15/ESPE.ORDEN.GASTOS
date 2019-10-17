import { Pago } from './../model/Pago';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const URL = 'http://localhost:8080/';
const API_URL = URL + 'getOrdenGastosContado';
const API_URL_CREATE = URL + 'saveOrUpdateOrdenGastosContado';
const API_URL_DELETE = URL + 'deleteOrdenGastosContado';

@Injectable()

export class PagoService {
    apiURL: string;

    constructor( private http: HttpClient ) { }

    buscarPago(): Observable<Pago[]> {
        return this.http.get<Pago[]>(API_URL);
    }

    crearActualizarPago(pago: Pago): Observable<Pago[]> {
        return this.http.post<Pago[]>(API_URL_CREATE, pago);
    }

    deletePago(pago: Pago): Observable<Pago[]>{
        return this.http.post<Pago[]>(API_URL_DELETE, pago);
    }

    getPago(id_orden: number): Observable<Pago[]> {
        return this.http.get<Pago[]>(API_URL);
    }
}
