import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTechComponent } from './new-tech/new-tech.component';

const routes: Routes = [
    { path: '', component: NewTechComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewTechRoutingModule { }
