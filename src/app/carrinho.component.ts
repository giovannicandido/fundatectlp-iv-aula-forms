import { Component, Input, OnInit } from '@angular/core';
import { Produto } from './models';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from './services';

@Component({
    selector: 'app-carrinho',
    standalone: true,
    imports: [
        CommonModule
    ],
    template: `
        <ul>
            <li *ngFor="let p of produtos">{{p.nome}}: {{p.preco}}</li>
        </ul>
        <button (click)="adicionarItem()">Adicionar item</button>
    `
})
export class CarrinhoComponent implements OnInit {

    produtos: Produto[] = []

    constructor(private carrinhoService: CarrinhoService) { 
         this.produtos = carrinhoService.items
    }

    ngOnInit() { }

    adicionarItem() {
        this.carrinhoService.adicionarItemRandom()
    }
}