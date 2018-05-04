import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../domain/model/pedido.model';
import { PedidoService } from '../../../shared/services/pedido.service';
import { Produto } from '../../../domain/model/produto.model';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css']
})
export class NovoPedidoComponent implements OnInit {
  private pedido: Pedido;
  private produtosDisponiveis: Array<Produto> = new Array<Produto>();

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedido = new Pedido();
    this.produtosDisponiveis.push(new Produto('Filé Mignon'));
    this.produtosDisponiveis.push(new Produto('Fraldinha'));
    this.produtosDisponiveis.push(new Produto('Alcatra'));
  }

}
