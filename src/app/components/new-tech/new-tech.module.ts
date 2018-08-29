import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTechRoutingModule } from './new-tech-routing.module';
import { NewTechComponent } from './new-tech/new-tech.component';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ng2-img-cropper';

@NgModule({
  imports: [
    CommonModule,
    NewTechRoutingModule,
    HeaderModule,
    FormsModule,
    ImageCropperModule
  ],
  declarations: [NewTechComponent]
})
export class NewTechModule { }
