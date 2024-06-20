import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';
import { Dog } from './models'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    MatFormFieldModule, 
    MatIconModule, 
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fundatectlpIV-aula-forms';
  dogs: Dog[] = []
  form: FormGroup

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', Validators.required], // array de configurações
      race: ['', Validators.compose([Validators.required, Validators.minLength(5)])] // compose junta mais de uma validação
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
