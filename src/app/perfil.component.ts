import { Component, Input, OnInit } from '@angular/core';
import { Produto } from './models';

@Component({
    selector: 'app-perfil',
    standalone: true,
    template: `
        <h1>Olá fulano voce está comprando R$ {{total}}</h1>
    `
})

export class PerfilComponent implements OnInit {

    @Input()
    produtos: Produto[] = []

    get total(): number {
        return this.produtos.map(p => p.preco).reduce((p1, p2) => p1 + p2, 0)
    }

    constructor() { }

    ngOnInit() { }
}