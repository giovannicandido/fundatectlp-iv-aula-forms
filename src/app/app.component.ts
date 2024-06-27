import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { RouterOutlet } from '@angular/router';
import { DOG_KEY, Dog } from './models'
import { CommonModule } from '@angular/common';
import { CarrinhoService, DogService } from './services';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ActionType, ActionsTableComponent } from './actions-table.component';
import { HelloComponent } from './hello.component';
import { CarrinhoComponent } from './carrinho.component';
import { PerfilComponent } from './perfil.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    MatFormFieldModule, 
    MatIconModule, 
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    ActionsTableComponent,
    ReactiveFormsModule,
    HelloComponent,
    CarrinhoComponent,
    PerfilComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  dogs: Dog[] = []
  vacines = ['Vacina 1', 'Vacina 2', 'Vacina 3']
  // For Angular Material Table
  displayedColumns: string[] = ['name', 'race', 'vacine', 'action'];
  //----
  activeActions: Array<ActionType> = [
    {
      name: "delete",
      icon: "delete",
      color: "primary"
    }, {
      name: "android",
      icon: "android",
      color: "secondary"
    }
  ]
  form: FormGroup

  @ViewChild("btnSubmit")
  btnSubmit!: MatButton

  constructor(formBuilder: FormBuilder,
    private dogService: DogService,
    public carrinhoService: CarrinhoService
  ) {
    this.form = formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(50)])], // array de configurações
      race: ['', Validators.compose([Validators.required, Validators.minLength(5)])], // compose junta mais de uma validação
      vacine: ['']
    })
  }
  ngOnInit(): void {
    this.dogs = this.dogService.listAll()
  }

  save() {
    if(this.form.valid) {
      this.dogService.saveDog(this.form.value)
      this.dogs = this.dogService.listAll()
      console.log('formulario valido')
    } else {
      console.error('formulario invalido')
    }
    console.log(this.btnSubmit)
    this.btnSubmit.disabled = true
  }

  execute(action: ActionType) {
    if(action.name === "delete") {
      this.dogService.deleteItem(action.value)
    } else if(action.name === "android") {
      console.log('Virar um android... para: ' + action.value?.name)
    }
  }

}
