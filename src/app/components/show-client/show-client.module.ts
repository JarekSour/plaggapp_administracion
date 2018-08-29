import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowClientRoutingModule } from './show-client-routing.module';
import { ShowClientComponent } from './show-client/show-client.component';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ng2-img-cropper';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

@NgModule({
    imports: [
        CommonModule,
        ShowClientRoutingModule,
        HeaderModule,
        FormsModule,
        ImageCropperModule,
        DropzoneModule
    ],
    declarations: [ShowClientComponent]
})
export class ShowClientModule { }
