import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoPedidoComponent } from './novo-pedido/novo-pedido.component';
import { SharedModule } from '../../shared/shared.module';
import { ListPedidoComponent } from './list-pedido/list-pedido.component';
import { MenuPedidoComponent } from './menu-pedido/menu-pedido.component';
import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoService } from '../../shared/services/pedido.service';

@NgModule({
  imports: [
    PedidoRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [NovoPedidoComponent, ListPedidoComponent, MenuPedidoComponent],
  providers: [
    PedidoService
  ]
})
export class PedidoModule { }
