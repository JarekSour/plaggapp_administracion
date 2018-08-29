import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin/admin.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class ProfileComponent implements OnInit {

    json = {
        logo: '', rut: '', nombre: '', razon: '', resolucion: '', email: '', direccion: '', ciudad: '',
        fono: '', fax: '', web: '', r_representante: '', representante: ''
    }
    licence = {
        nombre: '', fecha: '', max: '', dispo: ''
    }

    newlicence = { token: localStorage.getItem('token'), user: 'admin', key: '' }
    dvError: boolean = false;

    constructor(
        private toastr: ToastrService,
        public authService: AuthService,
        public router: Router,
        public adminService: AdminService
    ) { }

    ngOnInit() {
        this.adminService.getAdministrador({ token: localStorage.getItem('token'), user: 'admin' }).then((response) => {
            if (response['status']) {
                this.json.logo = response['data']['logo'];
                this.json.nombre = response['data']['nombre'];
                this.json.rut = response['data']['rut'];
                this.json.razon = response['data']['razon'];
                this.json.resolucion = response['data']['resolucion'];
                this.json.email = response['data']['email'];
                this.json.direccion = response['data']['direccion'];
                this.json.ciudad = response['data']['ciudad'];
                this.json.fono = response['data']['fono'];
                this.json.fax = response['data']['fax'];
                this.json.web = response['data']['web'];
                this.json.r_representante = response['data']['r_representante'];
                this.json.representante = response['data']['representante'];

                if (response['licence'] != null) {
                    this.licence.nombre = response['licence']['nombre'];
                    this.licence.fecha = response['licence']['caduca'];
                    this.licence.max = response['licence']['max_device'];
                }
                this.licence.dispo = response['dispo'];
            } else if (response['data'] == 'expired') {
                this.authService.closeSession();
                this.router.navigate(['/login']);
            }
        })
    }

    insertLicence() {
        this.dvError = false;
        this.authService.validateLicence(this.newlicence).then((response) => {
            if (response['status']) {
                this.newlicence.key = '';
                this.licence.nombre = response['plan'];
                this.licence.fecha = response['caduca'];
                this.licence.max = response['max'];
                this.toastr.success('', 'la licencia fue actualizada!', {
                    closeButton: true,
                    positionClass: 'toast-bottom-right',
                    timeOut: 6000,
                    extendedTimeOut: 3000
                });
            } else {
                this.dvError = true;
            }
        })
    }

}
