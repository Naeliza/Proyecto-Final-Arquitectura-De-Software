import { LoginInterface } from 'src/app/components/login-component/interfaces/login-interface';

// Clase UsuarioRegular que implementa la interfaz Usuario y representa un usuario regular

export class UsuarioRegular implements LoginInterface {
  constructor(public nombreUsuario: string, public contrasena: string) {}
}
