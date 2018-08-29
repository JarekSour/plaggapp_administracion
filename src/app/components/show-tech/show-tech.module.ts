import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowTechRoutingModule } from './show-tech-routing.module';
import { ShowTechComponent } from './show-tech/show-tech.component';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { ImageCropperModule } from 'ng2-img-cropper/index';

@NgModule({
  imports: [
    CommonModule,
    ShowTechRoutingModule,
    HeaderModule,
    FormsModule,
    DropzoneModule,
    ImageCropperModule
  ],
  declarations: [ShowTechComponent]
})
export class ShowTechModule { }
