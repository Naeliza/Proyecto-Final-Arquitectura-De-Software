import { LoginInterface } from 'src/app/components/login-component/interfaces/login-interface';

// Clase UsuarioAdmin que implementa la interfaz Usuario y representa un usuario administrador

export class UsuarioAdmin implements LoginInterface {
    constructor(public nombreUsuario: string, public contrasena: string) {}
  }