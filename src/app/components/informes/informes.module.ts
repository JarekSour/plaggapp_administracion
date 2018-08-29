import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformesRoutingModule } from './informes-routing.module';
import { InformesComponent } from './informes/informes.component';
import { HeaderModule } from '../header/header.module';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    imports: [
        CommonModule,
        InformesRoutingModule,
        HeaderModule,
        MyDateRangePickerModule,
        FormsModule,
        ChartsModule
    ],
    declarations: [InformesComponent]
})
export class InformesModule { }
