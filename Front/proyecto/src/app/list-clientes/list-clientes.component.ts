import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.sass']
})
export class ListClientesComponent implements OnInit{
  clientes: any[] = []; 

  constructor(public api: Service) {}

  ngOnInit(): void {
    this.obtnerClientes();
  }

  obtnerClientes() {
    this.api.getClientes().subscribe({
      next: (data) => {
        this.clientes = data;
      },
      error: (err) => {
        console.error('Error al obtener los empleados', err);
      },
    });
  }

}
