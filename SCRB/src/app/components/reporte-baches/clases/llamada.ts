import { ReporteBachesStrategy } from "./reporte-baches-strategy";

export class Llamada implements ReporteBachesStrategy {
    reportarBache(tamano: string) {
        // Lógica para reportar mediante llamada telefónica
        window.open('tel:123456789');
      }
}
