import { Router } from '@angular/router';
import { OrdenGastos } from './../model/OrdenGasto';
import { Component, OnInit } from '@angular/core';
import { OrdenGastoService } from '../services/OrdenGasto.service';
import { CertificadoPresupuestario } from './../model/CertificadoPresupuestario';
import {CertificadoPresupuestarioService} from '../services/CertificadoPresupuestario.service'
import { HttpClient } from '@angular/common/http';
import {Contrato} from './../model/Contrato';
import {ContratoService} from '../services/Contrato.service';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  OrdenGastoService: any;
  ordenGastos: OrdenGastos[];
  ContratoService:any;
  contrato: Contrato[];
  certificadoPresupuestario: CertificadoPresupuestario[];
  CertificadoPresupuestarioService:any;
  date: Date;
  constructor(
    private ordenGastoDataService: OrdenGastoService,
    private contratoDataService:ContratoService,
    private certificadoPresupuestarioDataService: CertificadoPresupuestarioService,
    private router: Router,
    private httpClient:HttpClient
  ) { }

  ngOnInit() {
    this.buscarOrdenGasto();
    this.buscarContrato();
    this.buscarCertificado();
  }
  buscarOrdenGasto() {
    this.ordenGastoDataService.buscarOrdenGasto().subscribe(respuesta => {
      this.ordenGastos = respuesta;
      console.log(this.ordenGastos);
    },
    () => {
      }
    );
  }
  Borrar(ordenGastos: OrdenGastos) {
    if (ordenGastos === undefined) {return; }
    this.ordenGastoDataService.deleteOrdenGasto(ordenGastos)
    .subscribe( respuesta  => {
      this.ordenGastos = respuesta;
      console.log (respuesta)
        alert('borrado');
      });
  }
  Editar(ordenGastos: OrdenGastos): void {
    localStorage.removeItem('id_orden');
    localStorage.setItem('id_orden', ordenGastos.id_orden.toString());
    this.router.navigate(['editar']);
  }
 buscarContrato() {
    this.contratoDataService.buscarContrato().subscribe(respuesta => {
      this.contrato = respuesta;
      console.log(this.contrato);
    },
    () => {
      }
    );
    }
    buscarCertificado() {
      this.certificadoPresupuestarioDataService.buscarCertificado().subscribe(respuesta => {
        this.certificadoPresupuestario = respuesta;
        console.log(this.certificadoPresupuestario);
      },
      () => {
        }
      );
    }
}
