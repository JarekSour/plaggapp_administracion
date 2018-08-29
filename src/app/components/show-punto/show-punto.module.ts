import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowPuntoRoutingModule } from './show-punto-routing.module';
import { ShowPuntoComponent } from './show-punto/show-punto.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
    imports: [
        CommonModule,
        ShowPuntoRoutingModule,
        HeaderModule
    ],
    declarations: [ShowPuntoComponent]
})
export class ShowPuntoModule { }
