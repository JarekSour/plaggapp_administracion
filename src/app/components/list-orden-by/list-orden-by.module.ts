import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOrdenByRoutingModule } from './list-orden-by-routing.module';
import { ListOrdenByComponent } from './list-orden-by/list-orden-by.component';
import { HeaderModule } from '../header/header.module';
import { CalendarModule } from 'angular-calendar';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports: [
        CommonModule,
        ListOrdenByRoutingModule,
        HeaderModule,
        CalendarModule.forRoot(),
        NgxPaginationModule
    ],
    declarations: [ListOrdenByComponent]
})
export class ListOrdenByModule { }
