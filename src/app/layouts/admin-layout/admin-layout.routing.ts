import { EditarOrdenComponent } from './../../editar-orden/editar-orden.component';
import { HistorialComponent } from './../../historial/historial.component';
import { ContratoComponent } from './../../contrato/contrato.component';
import { ProveedorComponent } from './../../proveedor/proveedor.component';
import { Routes } from '@angular/router';

import { InicioComponent } from '../../inicio/inicio.component';
import { FaqComponent } from 'app/faq/faq.component';
import { CancelarComponent } from 'app/cancelar/cancelar.component';
import { DatosEmpleadoComponent } from 'app/datos-empleado/datos-empleado.component';
//import { HomeComponent } from 'app/home/home.component';
import { DetallePagoComponent } from './../../detalle-pago/detalle-pago.component';
import { PagoComponent } from '../../pago/pago.component';
import { UnpagoComponent } from 'app/unpago/unpago.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: '', redirectTo: 'inicio', pathMatch:'full' },
    { path: 'cancelar', component: CancelarComponent },
    { path: 'datosEmpleado', component: DatosEmpleadoComponent},
    { path: 'proveedor', component: ProveedorComponent},
    { path: 'contrato', component: ContratoComponent},
    { path: 'editar', component: EditarOrdenComponent},
    { path: 'detalle-pago', component: DetallePagoComponent},
    { path: 'pago', component: PagoComponent},
    { path: 'unPago', component: UnpagoComponent},
    
];
