import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicenceComponent } from './licence/licence.component';

const routes: Routes = [
    { path: '', component: LicenceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenceRoutingModule { }
