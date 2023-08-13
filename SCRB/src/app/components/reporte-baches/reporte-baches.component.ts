import { Component } from '@angular/core';
import { Llamada } from './clases/llamada';
import { Chat } from './clases/chat';
import { Mensaje } from './clases/mensaje';
import { ReporteBachesContext } from './clases/reporte-baches-context';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { BacheReport } from './interfaces/bache-report';
import { UserService } from '../login-component/clases/UserServices';
import { Injectable } from '@angular/core'

// Clase Facade para simplificar el acceso a los objetos complejos
@Injectable()
export class ReporteBachesFacade {
  constructor(
    private reporteBachesContext: ReporteBachesContext,
    private readonly geolocation$: GeolocationService,
    private userService: UserService,
  ) {}

  // Función para obtener el nombre de usuario
  getNombreUsuario() {
    return this.userService.getUserName();
  }

  // Función para establecer la estrategia de reporte según el medio seleccionado
  setEstrategia(medio: string) {
    switch (medio) {
      case 'llamada':
        this.reporteBachesContext.setStrategy(new Llamada());
        break;
      case 'mensaje':
        this.reporteBachesContext.setStrategy(new Mensaje());
        break;
      case 'chat':
        this.reporteBachesContext.setStrategy(new Chat());
        break;
      default:
        this.reporteBachesContext.setStrategy(new Llamada());
        break;
    }
  }

  // Función para obtener la posición actual
  getPosition() {
    return this.geolocation$.pipe();
  }
}

@Component({
  selector: 'app-reporte-baches',
  templateUrl: './reporte-baches.component.html'
})
export class ReporteBachesComponent {

  // Array para almacenar los reportes de baches
  bacheReports: BacheReport[] = [];

  // Propiedad para almacenar el nombre de usuario
  nombreUsuario: string = '';

  // Propiedad para almacenar el medio
  medio: string = '';

  // Para generar número de reporte
  generateRandomNumber(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  constructor(
    // Inyección de dependencias de la clase Facade
    public reporteBachesFacade: ReporteBachesFacade
  ) {}
  
  // Función para seleccionar el medio de reporte
  seleccionarMedio(medio: string) {
    // Crear un nuevo objeto BacheReport con el medio seleccionado
    this.bacheReports = [];

    // Establecer la estrategia de reporte según el medio seleccionado
    this.reporteBachesFacade.setEstrategia(medio);

    // Agregar el medio seleccionado al objeto BacheReport
    this.bacheReports.push({
      medio: medio,
      tamano: 'grande',
      latitude: 18.4943627,
      longitude: -69.8291572,
      nombreUsuario: this.nombreUsuario
    });

    this.medio = medio;
  }

  // Función para reportar un bache
  reportarBache(tamano: string) {
    // Crear un nuevo objeto BacheReport con el medio seleccionado y el nombre de usuario
    const newBacheReport: BacheReport = {
      medio: this.bacheReports[0].medio,
      tamano: tamano,
      latitude: 0,
      longitude: 0,
      nombreUsuario: this.nombreUsuario
    };

    // Obtener la posición actual y agregarla al objeto BacheReport
    this.reporteBachesFacade.getPosition().subscribe(position => {
      newBacheReport.latitude = position?.coords?.latitude;
      newBacheReport.longitude = position?.coords?.longitude;
      // Agregar el nuevo objeto BacheReport al array
      this.bacheReports.push(newBacheReport);
    });
  }

  ngOnInit() {
    // Obtener el nombre de usuario y almacenarlo en la propiedad correspondiente
    this.reporteBachesFacade.getNombreUsuario().subscribe((name: string) => {
      this.nombreUsuario = name;
    });
  }
}