import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Pruebas';

  constructor(private activerouter: ActivatedRoute, private router: Router) {
   
  }
  direccionar() {

    localStorage.removeItem("usuario");
    localStorage.removeItem("password_usuario");
    
    this.router.navigate(['/inicio']);
  }

}
