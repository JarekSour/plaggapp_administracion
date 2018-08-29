import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        HeaderModule,
        FormsModule
    ],
    declarations: [ProfileComponent]
})
export class ProfileModule { }
