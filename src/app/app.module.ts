import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';

import { DocumentoService } from './services/documento/documento.service';
import { PuntoService } from './services/punto/punto.service';
import { ExcelService } from './services/excel/excel.service';
import { ParametroService } from './services/parametro/parametro.service';
import { OrdenService } from './services/orden/orden.service';
import { ClienteService } from './services/cliente/cliente.service';
import { TecnicoService } from './services/tecnico/tecnico.service';
import { AdminService } from './services/admin/admin.service';
import { AuthService } from './services/auth/auth.service';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule,
        ToastrModule.forRoot(),
    ],
    providers: [AuthService, AdminService, TecnicoService, ClienteService, OrdenService, ParametroService, ExcelService, PuntoService, DocumentoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
