import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { ParametrosComponent } from './parametros/parametros.component';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ParametrosRoutingModule,
        HeaderModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [ParametrosComponent]
})
export class ParametrosModule { }
