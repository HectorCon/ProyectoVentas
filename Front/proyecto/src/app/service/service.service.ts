import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInterface, responseInterface } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class Service {

  private endPoint = 'http://localhost:5144/';

  constructor(private http: HttpClient) { }

  login(tarea: any) {
    let seccion = "login/";
    let direccion = this.endPoint + seccion;
    return this.http.post<any>(direccion, tarea);

  }

  guardarCliente(cliente: any): Observable<any> {
    return this.http.post<any>(`${this.endPoint}Cliente`, cliente)
      .pipe(res => res);
  }

  modCliente(tarea: any) {
    const id_cliente = tarea.id_cliente;
    const seccion = `Cliente/${id_cliente}`;  
    const direccion = this.endPoint + seccion;
    return this.http.put<any>(direccion, tarea);
}

  desCliente(id_cliente: number) {
    const seccion = `Cliente/${id_cliente}`;  
    const direccion = this.endPoint + seccion;
    return this.http.delete<any>(direccion);
}

  getClientes(): Observable<any[]> {
  return this.http.get<any[]>(`${this.endPoint}Cliente`);
}

  guardarProveedor(proveedor: any): Observable<any> {
  return this.http.post<any>(`${this.endPoint}Proveedor`, proveedor)
    .pipe(res => res);
}


}
