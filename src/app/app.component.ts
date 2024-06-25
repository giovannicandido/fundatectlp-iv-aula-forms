import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { RouterOutlet } from '@angular/router';
import { Dog } from './models'
import { CommonModule } from '@angular/common';

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
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fundatectlpIV-aula-forms';
  dogs: Dog[] = []
  vacines = ['Vacina 1', 'Vacina 2', 'Vacina 3']
  form: FormGroup

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(50)])], // array de configurações
      race: ['', Validators.compose([Validators.required, Validators.minLength(5)])], // compose junta mais de uma validação
      vacine: ['']
    })
  }

  save() {
    if(this.form.valid) {
      console.log('formulario valido')
      this.dogs.push(this.form.value)
    } else {
      console.error('formulario invalido')
    }
    console.log('Items: ')
    console.log(this.dogs)
  }

}
