import { OrdenGastos } from './../model/OrdenGasto';
import { OrdenGastoService } from './../services/OrdenGasto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar-orden',
  templateUrl: './editar-orden.component.html',
  styleUrls: ['./editar-orden.component.scss']
})
export class EditarOrdenComponent implements OnInit {
  ordenGastoService:any;
  ordenGastos: OrdenGastos = new OrdenGastos();
  tittle = 'sweetAlert';
  editForm: FormGroup;
  
  

  constructor(private router:Router,
    private formBuilder: FormBuilder,
    private  ordenGastoDataService: OrdenGastoService) { }
  ngOnInit() {
    this.Editar();
    this.editForm = this.formBuilder.group({
      
      
      Descripcion:  [Validators.required, Validators.pattern('')],
      horaFech:  [Validators.required, Validators.pattern('')],
      ObjetoContrato:  [Validators.required, Validators.pattern('')],
      Orden:  [Validators.required, Validators.pattern('^[0-9]{0,1}$')],
      Valor: [Validators.required, Validators.pattern('^[0-9]{1,5}$')],
      Cantidad: [Validators.required, Validators.pattern('^[0-9]{0,5}$')],
      precioUnitario: [Validators.required, Validators.pattern('^[0-9]{0,5}$')],
      //PreUni: [Validators.required, Validators.pattern('^[0-9]{0,5}$')],
      Iva: [Validators.required, Validators.pattern('^(0.12)$')],
      OtrImp: [Validators.required, Validators.pattern('^[0-9]{1,4}.[0-9]{1,2}$')],
      mesDia: [Validators.required, Validators.pattern('[1-9]{1,2}$')],
      numeroContratoE:  [Validators.required, Validators.pattern('^[0-99999]{0,9}$')],
      NombreContratist:[Validators.required, Validators.pattern('[A-ZÑ]{3,30} [A-ZÑ]{3,30}')],
      RucContratista:[Validators.required, Validators.pattern('([0|1|2]{1})([0-9]{12})')]
  }); 

  }
  
  Editar() {  
    let id_orden = localStorage.getItem('id_orden');
    this.ordenGastoDataService.getOrdenGastoid(+id_orden);
    this.ordenGastos = JSON.parse(sessionStorage.getItem('id_orden'));
  }
  Actualizar(ordenGasto: OrdenGastos): void {
    this.ordenGastoDataService.crearOActualizarOrdenGasto(ordenGasto)
    .subscribe(data => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        type: 'success',
        title: 'Se edito con éxito'
      });
    this.router.navigateByUrl('/proveedor')})
  }
  

}
