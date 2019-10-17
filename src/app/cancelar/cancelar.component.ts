import { OrdenGastoService } from './../services/OrdenGasto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdenGastos } from './../model/OrdenGasto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css'],
})
export class CancelarComponent implements OnInit {

  OrdenGastoService: any;
  ordenGasto: OrdenGastos;
  title = 'sweetAlert';
  date: Date;
  editForm: FormGroup;

  DatosEmpleado: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private ordeGastoDataService: OrdenGastoService
  ) {}

  ngOnInit() {
    this.ordenGasto = new OrdenGastos();

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

  
btnClickHome =  function () {
  const validacionRuc = $('#ruc').val();
  const validacionOrdG = $('#OrdG').val();
  const validacionhoraFech = $('#horaFech').val();
  const validacionOrden = $('#Orden').val();
  const validacionDescripcion = $('#Descripcion').val();
  const validacionCantidad = $('#Cantidad').val();
  //const validacionPreUni = $('#PreUni').val();
  const validacionIva = $('#Iva').val();
  // const validacionOtrImp = $('#OtrImp').val();


  // tslint:disable-next-line:curly
  // tslint:disable-next-line:no-unused-expression
  if ( validacionRuc === '' || validacionOrdG === '' || validacionhoraFech === '' || validacionOrden === '' ||
  // tslint:disable-next-line:max-line-length
  validacionDescripcion === '' || validacionCantidad === '' || validacionIva === ''  ) {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Faltan Campos por llenar!',
      footer: '<a href></a>'
    })
  } else {
    this.router.navigateByUrl('/proveedor')
    window.location.reload()
  }
};
  crearOActualizarOrdenGasto() {
    this.ordeGastoDataService.crearOActualizarOrdenGasto(this.ordenGasto)
    .subscribe(rees =>  {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        type: 'success',
        title: 'Se creo con éxito'
      }); 
    })
  }
  cancelar(){
    this.router.navigateByUrl('/proveedor');
    window.location.reload()

  }
  
  
  formatsDateTest: string[] = [
    'yyyy/MM/dd'
    ];
  
  dateNow : Date = new Date();

}
