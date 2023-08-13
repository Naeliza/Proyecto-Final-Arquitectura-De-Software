import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { ReporteBachesComponent } from './components/reporte-baches/reporte-baches.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  pathMatch:'full'
},
{
  path: 'reporte-baches',
  component: ReporteBachesComponent
},
{
  path: '**',
  redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
