import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActionService } from './services';
import { CommonModule } from '@angular/common';

export interface ActionType {
    name: string,
    icon: string,
    color: string,
    value?: any
}

export const DEFAULT_ACTIONS: ActionType[] = [
    {
        name: "delete",
        icon: "delete",
        color: "primary"
    }, {
        name: "edit",
        icon: "edit",
        color: "primary"
    }
]

@Component({
    selector: 'app-actions-table',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    templateUrl: 'actions-table.component.html',
    styles: [
        `.actions {
            border: 2px solid blue
        }`
    ]
})
export class ActionsTableComponent implements OnInit {

    @Output()
    onAction = new EventEmitter<ActionType>()

    @Input()
    item: any

    @Input()
    activeActions: Array<ActionType> = DEFAULT_ACTIONS

    constructor() { }

    ngOnInit() { }

    executeAction(action: ActionType) {
        const {name, icon, color} = action
        const value = this.item
        this.onAction.emit({name, icon, color, value})
    }
}