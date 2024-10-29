import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ModclienteComponent } from './modcliente/modcliente.component';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { ProveedorComponent } from './proveedor/proveedor.component';

const routes: Routes = [
      {path: 'login', component: LoginComponent},
      {path: 'header', component: HeaderComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'cliente', component: ClienteComponent},
      {path: 'modcliente', component: ModclienteComponent},
      {path: 'list-clientes', component: ListClientesComponent},
      {path: 'proveedor', component: ProveedorComponent},
      {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
