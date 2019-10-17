import { OrdenGastos } from './../model/OrdenGasto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};

const URL = 'http://localhost:8080/';
const API_URL = URL + 'getOrdenGastos';
const API_URL_CREATE = URL + 'saveOrUpdateOrdenGastos';
const API_URL_DELETE = URL + 'deleteOrdenGastos';
const httpconf = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  };

@Injectable()

export class OrdenGastoService {
    apiUrl: string;
    constructor(private http: HttpClient, ) { }

    buscarOrdenGasto(): Observable<OrdenGastos[]> {
        return this.http.get<OrdenGastos[]>(API_URL);
    }

    crearOActualizarOrdenGasto(ordenGastos: OrdenGastos): Observable<OrdenGastos[]> {
        return this.http.post<OrdenGastos[]>(API_URL_CREATE, ordenGastos);
        }
    deleteOrdenGasto(ordenGastos: OrdenGastos): Observable<OrdenGastos[]> {
        return this.http.post<OrdenGastos[]>(API_URL_DELETE, ordenGastos);
    }
    getOrdenGastoid(id_orden: number): Observable<OrdenGastos[]> {
        return this.http.get<OrdenGastos[]>(API_URL);
    }

    findDataUser(user: String){
        return this.http.get("https://servicios.espe.edu.ec:8443/adm_user-0.0.1-SNAPSHOT/adm/id/" + user + "/13",httpconf).pipe(
          map(
            (res: any) => {
                return res;
            },
            error => {
              console.log("Error: ", error);
            }
          )
        );
      }
    

}
