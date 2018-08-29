import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOrdenByComponent } from './list-orden-by/list-orden-by.component';

const routes: Routes = [
    { path: '', component: ListOrdenByComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListOrdenByRoutingModule { }
