import { Component, OnInit } from '@angular/core';
import { LoginInterface } from 'src/app/components/login-component/interfaces/login-interface';
import { FabricaUsuarios } from 'src/app/components/login-component/clases/FabricaUsuarios';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './clases/UserServices';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css']
})
export class LoginComponent implements OnInit {

  usuarioRegular: LoginInterface;
  usuarioAdmin: LoginInterface;
  loginForm: FormGroup = new FormGroup({
    nombreUsuario: new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  };

  constructor(private router: Router, private userService: UserService) {
    // Creación de un usuario regular utilizando la fábrica de usuarios
    this.usuarioRegular = FabricaUsuarios.crearUsuario('ejemplo', 'contraseña123');

    // Creación de un usuario administrador utilizando la fábrica de usuarios
    this.usuarioAdmin = FabricaUsuarios.crearUsuario('admin', 'admin123');
  }

  onSubmit(): void {
    console.log(this.loginForm.value);

    // Validamos si el login fue satisfactorio
    if (this.loginForm.valid) {
      // Seteamos el usuario en el userService
      this.userService.setUserName(this.loginForm.value.nombreUsuario);
      // Navegamos a la pantalla
      this.router.navigate(['/reporte-baches']);
    }
  }
}
