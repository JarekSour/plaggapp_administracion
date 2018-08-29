import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewClientRoutingModule } from './new-client-routing.module';
import { NewClientComponent } from './new-client/new-client.component';
import { HeaderModule } from '../header/header.module';
import { ImageCropperModule } from 'ng2-img-cropper';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NewClientRoutingModule,
        HeaderModule,
        ImageCropperModule,
        FormsModule
    ],
    declarations: [NewClientComponent]
})
export class NewClientModule { }
