
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovoPedidoComponent } from './pages/pedido/novo-pedido/novo-pedido.component';
import { MenuPedidoComponent } from './pages/pedido/menu-pedido/menu-pedido.component';


const routes: Routes = [
  {path: '', component: MenuPedidoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
