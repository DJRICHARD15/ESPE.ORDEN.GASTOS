import { UnpagoComponent } from './../../unpago/unpago.component';
import { PagoComponent } from './../../pago/pago.component';
import { EditarOrdenComponent } from './../../editar-orden/editar-orden.component';
import { HistorialComponent } from './../../historial/historial.component';
import { ContratoComponent } from './../../contrato/contrato.component';
import { ProveedorComponent } from './../../proveedor/proveedor.component';
import { DatosEmpleadoComponent } from './../../datos-empleado/datos-empleado.component';
import { DetallePagoComponent } from './../../detalle-pago/detalle-pago.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { InicioComponent } from '../../inicio/inicio.component';
import { FaqComponent } from '../../faq/faq.component';
import { CancelarComponent } from '../../cancelar/cancelar.component';
import { InputMaskModule} from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { NgxSpinnerModule } from 'ngx-spinner';
//import { HomeComponent } from 'app/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxSpinnerModule,
    DialogModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    ToastModule,
    TableModule,
    TooltipModule,
    InputMaskModule
  ],
  declarations: [
    InicioComponent,
    FaqComponent,
  //  HomeComponent,
    CancelarComponent,
    DatosEmpleadoComponent,
    ProveedorComponent,
    ContratoComponent,
    HistorialComponent,
    EditarOrdenComponent,
    DetallePagoComponent,
    PagoComponent,
    UnpagoComponent,
    
  ]
})

export class AdminLayoutModule {}
