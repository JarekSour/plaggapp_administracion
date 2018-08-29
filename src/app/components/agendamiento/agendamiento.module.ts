import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamientoRoutingModule } from './agendamiento-routing.module';
import { AgendamientoComponent } from './agendamiento/agendamiento.component';
import { CalendarModule } from 'angular-calendar';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    AgendamientoRoutingModule,
    CalendarModule.forRoot(),
    HeaderModule
  ],
  declarations: [AgendamientoComponent]
})
export class AgendamientoModule { }
