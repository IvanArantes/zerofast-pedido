import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoPedidoComponent } from './novo-pedido/novo-pedido.component';
import { SharedModule } from '../shared/shared.module';
import { ListPedidoComponent } from './list-pedido/list-pedido.component';
import { MenuPedidoComponent } from './menu-pedido/menu-pedido.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [NovoPedidoComponent, ListPedidoComponent, MenuPedidoComponent]
})
export class PedidoModule { }
