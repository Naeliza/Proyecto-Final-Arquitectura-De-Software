// Clase FabricaUsuarios que implementa el patrón de diseño Factory para crear usuarios

import { LoginInterface } from "../interfaces/login-interface";
import { UsuarioAdmin } from "./UsuarioAdmin";
import { UsuarioRegular } from "./UsuarioRegular";

export class FabricaUsuarios {

  static tipo: string;

    // Método estático crearUsuario que toma un tipo de usuario, un nombre de usuario y una contraseña, y devuelve una instancia del tipo de usuario correspondiente
    static crearUsuario(nombreUsuario: string, contrasena: string): LoginInterface {
      if (nombreUsuario=='admin') {
        this.tipo = 'admin';
      }else{
        this.tipo = 'regular';
      }
      switch (this.tipo) {
        case 'regular':
          return new UsuarioRegular(nombreUsuario, contrasena); // Retorna una instancia de UsuarioRegular si el tipo es 'regular'
        case 'admin':
          return new UsuarioAdmin(nombreUsuario, contrasena); // Retorna una instancia de UsuarioAdmin si el tipo es 'admin'
        default:
          throw new Error('Tipo de usuario inválido'); // Lanza un error si el tipo de usuario no es válido
      }
    }
  }