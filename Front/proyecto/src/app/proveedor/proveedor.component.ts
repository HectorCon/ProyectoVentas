import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../service/service.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.sass']
})
export class ProveedorComponent implements OnInit{
  proveedorForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, public api: Service) {}

  ngOnInit(): void {
    this.proveedorForm = this.formBuilder.group({
      NombreProveedor: ['', Validators.required],
      TelefonoProveedor: ['', Validators.required],
      DireccionProveedor: ['', Validators.required]
    });
  }


  EnvioDatosProveedor() {
    if (this.proveedorForm.valid) {
      const proveedor = this.proveedorForm.value;
      console.log('Datos a enviar:', proveedor); 
      this.api.guardarProveedor(proveedor).subscribe({
        next: (response) => {
          this.proveedorForm.reset();
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
