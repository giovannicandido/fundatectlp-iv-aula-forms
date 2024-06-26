import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { RouterOutlet } from '@angular/router';
import { DOG_KEY, Dog } from './models'
import { CommonModule } from '@angular/common';
import { DogService } from './services';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ActionType, ActionsTableComponent } from './actions-table.component';

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
    ReactiveFormsModule
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

  form: FormGroup

  constructor(formBuilder: FormBuilder, private dogService: DogService) {
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
  }

  execute(action: ActionType) {
    if(action.name === "delete") {
      this.dogService.deleteItem(action.value)
    }
  }

}
