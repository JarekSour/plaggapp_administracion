import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenesRoutingModule } from './ordenes-routing.module';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { HeaderModule } from '../header/header.module';
import { CalendarModule } from 'angular-calendar';

@NgModule({
  imports: [
    CommonModule,
    OrdenesRoutingModule,
    HeaderModule,
    CalendarModule.forRoot(),
  ],
  declarations: [OrdenesComponent]
})
export class OrdenesModule { }
