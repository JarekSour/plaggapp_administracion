import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipoRoutingModule } from './equipo-routing.module';
import { EquipoComponent } from './equipo/equipo.component';
import { HeaderModule } from '../header/header.module';
import { ImageCropperModule } from 'ng2-img-cropper/index';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EquipoRoutingModule,
    HeaderModule,
    ImageCropperModule,
    FormsModule
  ],
  declarations: [EquipoComponent]
})
export class EquipoModule { }
