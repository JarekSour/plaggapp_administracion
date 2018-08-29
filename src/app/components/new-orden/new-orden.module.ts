import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewOrdenRoutingModule } from './new-orden-routing.module';
import { NewOrdenComponent } from './new-orden/new-orden.component';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';

@NgModule({
  imports: [
    CommonModule,
    NewOrdenRoutingModule,
    HeaderModule,
    FormsModule,
    DpDatePickerModule
  ],
  declarations: [NewOrdenComponent]
})
export class NewOrdenModule { }
