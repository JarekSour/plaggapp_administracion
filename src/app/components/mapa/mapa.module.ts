import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapaRoutingModule } from './mapa-routing.module';
import { MapaComponent } from './mapa/mapa.component';
import { HeaderModule } from '../header/header.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        MapaRoutingModule,
        HeaderModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAaYwbinhqL4l3uhdIjpFLZ4-mDQfwBN4M'
        })
    ],
    declarations: [MapaComponent]
})
export class MapaModule { }
