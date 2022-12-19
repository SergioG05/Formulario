import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ImpresionComponent } from './impresion/impresion.component';
const routes: Routes = [
   {path : '', component : FormularioComponent},
   { path:'Pag' , component: ImpresionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
