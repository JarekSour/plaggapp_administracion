import { Component, OnInit } from '@angular/core';
import { DocumentoService } from '../../../services/documento/documento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
    selector: 'app-documento',
    templateUrl: './documento.component.html',
    styleUrls: ['./documento.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class DocumentoComponent implements OnInit {

    configT: DropzoneConfigInterface = {
        url: 'https://api.plagapp.cl/documento/default/upload',
        maxFilesize: 8,
        method: 'POST',
        params: {
            token: localStorage.getItem('token'),
            user: 'admin',
            tipo: 'tecnico'
        }
    };
    configL: DropzoneConfigInterface = {
        url: 'https://api.plagapp.cl/documento/default/upload',
        maxFilesize: 8,
        method: 'POST',
        params: {
            token: localStorage.getItem('token'),
            user: 'admin',
            tipo: 'legal'
        }
    };
    documentosTecnicos: any;
    documentosLegales: any;

    constructor(
        public authService: AuthService,
        private router: Router,
        private route: ActivatedRoute,
        public documentoService: DocumentoService
    ) { }

    ngOnInit() {
        this.documentoService.getDefaultDocs({ token: localStorage.getItem('token'), user: 'admin' }).then((response) => {
            if (response['status'] == true) {
                this.documentosTecnicos = response['tech'];
                this.documentosLegales = response['legal'];
            }
        })
    }

    downloadDoc(url) {
        var newWindow = window.open('https://api.plagapp.cl/storage/' + url);
    }

    deleteDocT(id) {
        this.documentoService.deleteDefaultDoc({ token: localStorage.getItem('token'), user: 'admin', id: id }).then((response) => {
            if (response['status'] == true) {
                this.documentosTecnicos = this.documentosTecnicos.filter(item => item.id !== id);
            }
        })
    }

    deleteDocL(id) {
        this.documentoService.deleteDefaultDoc({ token: localStorage.getItem('token'), user: 'admin', id: id }).then((response) => {
            if (response['status'] == true) {
                this.documentosLegales = this.documentosLegales.filter(item => item.id !== id);
            }
        })
    }

    onUploadSuccessT(e) {
        this.documentosTecnicos.push({ id: e[1]["id"], nombre: e[1]["name"], url: e[1]["path"] });
    }
    onUploadSuccessL(e) {
        this.documentosLegales.push({ id: e[1]["id"], nombre: e[1]["name"], url: e[1]["path"] });
    }

    onUploadError(e) {
        console.log(e)
    }

}
