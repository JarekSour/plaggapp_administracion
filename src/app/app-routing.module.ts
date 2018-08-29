import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', loadChildren: 'app/components/login/login.module#LoginModule' },
    { path: 'licence/:token', loadChildren: 'app/components/licence/licence.module#LicenceModule' },
    { path: 'licence/:token/:type', loadChildren: 'app/components/licence/licence.module#LicenceModule' },
    { path: 'licence', loadChildren: 'app/components/login/login.module#LoginModule' },
    { path: 'home', loadChildren: 'app/components/home/home.module#HomeModule' },
    { path: 'agendamiento', loadChildren: 'app/components/agendamiento/agendamiento.module#AgendamientoModule' },
    { path: 'equipo', loadChildren: 'app/components/equipo/equipo.module#EquipoModule' },
    { path: 'clientes', loadChildren: 'app/components/clientes/clientes.module#ClientesModule' },
    { path: 'ordenes', loadChildren: 'app/components/ordenes/ordenes.module#OrdenesModule' },
    { path: 'informes', loadChildren: 'app/components/informes/informes.module#InformesModule' },
    { path: 'parametros', loadChildren: 'app/components/parametros/parametros.module#ParametrosModule' },
    { path: 'new-tech', loadChildren: 'app/components/new-tech/new-tech.module#NewTechModule' },
    { path: 'new-client', loadChildren: 'app/components/new-client/new-client.module#NewClientModule' },
    { path: 'new-orden', loadChildren: 'app/components/new-orden/new-orden.module#NewOrdenModule' },
    { path: 'tecnico/:id', loadChildren: 'app/components/show-tech/show-tech.module#ShowTechModule' },
    { path: 'cliente/:id', loadChildren: 'app/components/show-client/show-client.module#ShowClientModule' },
    { path: 'orden/detalle/:id', loadChildren: 'app/components/show-orden/show-orden.module#ShowOrdenModule' },
    { path: 'orden/punto/:id', loadChildren: 'app/components/show-punto/show-punto.module#ShowPuntoModule' },
    { path: 'orden/:tipo/:id', loadChildren: 'app/components/list-orden-by/list-orden-by.module#ListOrdenByModule' },
    { path: 'mapa/:id', loadChildren: 'app/components/mapa/mapa.module#MapaModule' },
    { path: 'documento', loadChildren: 'app/components/documento/documento.module#DocumentoModule' },
    { path: 'profile', loadChildren: 'app/components/profile/profile.module#ProfileModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
