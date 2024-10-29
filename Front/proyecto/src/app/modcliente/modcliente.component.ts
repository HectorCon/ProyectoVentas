import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from '../service/service.service'; // Asegúrate de importar correctamente tu servicio

@Component({
  selector: 'app-modcliente',
  templateUrl: './modcliente.component.html',
  styleUrls: ['./modcliente.component.sass']
})
export class ModclienteComponent implements OnInit {
  modForm!: FormGroup;
  deleteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: Service) {}

  ngOnInit(): void {
    // Inicialización del FormGroup para modificar cliente
    this.modForm = this.formBuilder.group({
      id_cliente:['', Validators.required],
      nombresCliente: ['', Validators.required],
      apellidosCliente: ['', Validators.required],
      nit: ['', Validators.required],
      direccionCliente: ['', Validators.required],
      categoriaCliente: [''],
      EstadoCliente:['', Validators.required]
    });

    this.deleteForm = this.formBuilder.group({
      idempleadoEliminar: ['', Validators.required]
    });
  }

  // Función para modificar cliente
  modDatos() {
    if (this.modForm.valid) {
      const mod_cliente = this.modForm.value;
      mod_cliente.EstadoCliente = mod_cliente.EstadoCliente === 'Activo' ? 1 : 0;
      this.api.modCliente(mod_cliente).subscribe({
        next: (response) => {
          console.log('Cliente modificado exitosamente', response);
          this.modForm.reset();
        },
        error: (error) => {
          console.error('Error al modificar cliente', error);
        }
      });
    }
  }

  // Función para eliminar empleado
  eliminarCliente() {
    if (this.deleteForm.valid) {
        const idCliente = this.deleteForm.value.idempleadoEliminar;
        console.log('ID del cliente a eliminar:', idCliente);
        this.api.desCliente(idCliente).subscribe({
            next: (response) => {
                console.log('Cliente eliminado exitosamente', response);
                this.deleteForm.reset();
            },
            error: (error) => {
                console.error('Error al eliminar Cliente', error);
            }
        });
    }
}
}
