import { ReporteBachesContext } from "../clases/reporte-baches-context";

export interface BacheReport {
    medio: string;
    tamano: string;
    latitude: number;
    longitude: number;
    nombreUsuario?: string;
  }
  