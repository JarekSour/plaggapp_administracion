import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowOrdenRoutingModule } from './show-orden-routing.module';
import { ShowOrdenComponent } from './show-orden/show-orden.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
    imports: [
        CommonModule,
        ShowOrdenRoutingModule,
        HeaderModule
    ],
    declarations: [ShowOrdenComponent]
})
export class ShowOrdenModule { }
