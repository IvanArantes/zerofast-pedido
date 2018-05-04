import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovoPedidoComponent } from './novo-pedido/novo-pedido.component';
import { ListPedidoComponent } from './list-pedido/list-pedido.component';


const routes: Routes = [
  {path: 'pedido', component: NovoPedidoComponent },
  {path: 'pedidos', component: ListPedidoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule {}
