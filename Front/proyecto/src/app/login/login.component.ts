import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { responseInterface } from '../interfaces/interfaces';
import { Service } from '../service/service.service';
//import { AutenticarService, LoginServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public api: Service
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      console.log('Correo:', email, 'Contraseña:', password);

      let login = {
        correo_empleado: this.form.value.email,
        token_empleado: this.form.value.password,
      };

      this.api.login(login).subscribe({
        next: (response) => {
          this.form.reset();
          this.router.navigate(['/dashboard']);
        },
        error: (response) => {
          
        },
      });
    }
  }
}
