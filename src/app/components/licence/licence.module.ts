import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenceRoutingModule } from './licence-routing.module';
import { LicenceComponent } from './licence/licence.component';

@NgModule({
  imports: [
    CommonModule,
    LicenceRoutingModule
  ],
  declarations: [LicenceComponent]
})
export class LicenceModule { }
