import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentoRoutingModule } from './documento-routing.module';
import { DocumentoComponent } from './documento/documento.component';
import { HeaderModule } from '../header/header.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

@NgModule({
  imports: [
    CommonModule,
    DocumentoRoutingModule,
    HeaderModule,
    DropzoneModule
  ],
  declarations: [DocumentoComponent]
})
export class DocumentoModule { }
