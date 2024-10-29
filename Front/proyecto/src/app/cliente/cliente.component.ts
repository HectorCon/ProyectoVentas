import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../service/service.service';
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.Sass']
})

export class ClienteComponent implements OnInit {
  clienteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, public api: Service) {}

  ngOnInit(): void {
    this.clienteForm = this.formBuilder.group({
      NombresCliente: ['', Validators.required],
      ApellidosCliente: ['', Validators.required],
      NIT: ['', Validators.required],
      DireccionCliente: ['', Validators.required],
      CategoriaCliente: ['', Validators.required]
    });
  }

  EnvioDatos() {
    if (this.clienteForm.valid) {
      const cliente = this.clienteForm.value;
      console.log('Datos a enviar:', cliente); 
      this.api.guardarCliente(cliente).subscribe({
        next: (response) => {
          this.clienteForm.reset();
          console.log('Empleado guardado con éxito', response); 
        },
        error: (err) => {
          console.error("Error al guardar el empleado", err);
        }
      });
    } else {
      console.warn('Formulario inválido');
    }
 }
}