import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/components/login-component/login-component';
import { ReporteBachesComponent, ReporteBachesFacade } from './reporte-baches/reporte-baches.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, ReporteBachesComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [LoginComponent],
  providers: [
      ReporteBachesFacade
  ]
})
export class SharedModule { }
