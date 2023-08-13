import { Injectable } from '@angular/core';
import { ReporteBachesStrategy } from './reporte-baches-strategy';
import { Llamada } from './llamada';

@Injectable({
  providedIn: 'root'
})
export class ReporteBachesContext {
  // Inicializa la estrategia a utilizar por defecto
  private strategy: ReporteBachesStrategy = new Llamada();

  // Método para establecer la estrategia actual
  setStrategy(strategy: ReporteBachesStrategy): void {
    this.strategy = strategy;
  }

  // Método para reportar un bache utilizando la estrategia actual
  reportarBache(tamano: string): void {
    this.strategy.reportarBache(tamano);
  }
}
