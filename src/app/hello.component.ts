import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-hello',
    standalone: true,
    template: `
        <h1>{{nome}}</h1>
        <h2>{{cargo}}</h2>
    `
})

export class HelloComponent implements OnInit {
    @Input()
    nome = ''
    @Input()
    cargo = ''
    constructor() { }

    ngOnInit() { }
}