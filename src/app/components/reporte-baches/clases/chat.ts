import { ReporteBachesStrategy } from "./reporte-baches-strategy";

export class Chat  implements ReporteBachesStrategy  {
    reportarBache(tamano: string) {
        // Lógica para reportar mediante chat en la página institucional
        window.location.href = 'https://www.institucion.com/chat';
      }
    
}
