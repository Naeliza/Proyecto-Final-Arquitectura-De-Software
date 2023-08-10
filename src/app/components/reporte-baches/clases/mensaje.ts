import { ReporteBachesStrategy } from "./reporte-baches-strategy";


export class Mensaje  implements ReporteBachesStrategy {
    reportarBache(tamano: string) {
        // Lógica para reportar mediante mensaje de correo o mensajería instantánea
        window.open('mailto:reportes@institucion.com');
      }
}
