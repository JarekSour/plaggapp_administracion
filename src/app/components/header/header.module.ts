import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule,
        HeaderRoutingModule
    ],
    declarations: [HeaderComponent],
    exports: [ HeaderComponent ]
})
export class HeaderModule { }
