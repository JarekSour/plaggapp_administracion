import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendamientoComponent } from './agendamiento/agendamiento.component';

const routes: Routes = [
    { path: '', component: AgendamientoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamientoRoutingModule { }
