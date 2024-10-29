import { Component } from '@angular/core';
//import { AutenticarService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./Header.component.sass']
})
export class HeaderComponent {

  //constructor(public autenticarServ: AutenticarService, private router: Router) {}

/*cerrar(){
  this.autenticarServ.logout();
  this.router.navigate(['/login']);
}*/

}