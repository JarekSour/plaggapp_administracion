import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class LoginComponent implements OnInit {

    loginData = { rut: '', pass: '' };
    error: any;

    constructor(
        public authService: AuthService,
        public router: Router,
        public adminService: AdminService
    ) { }

    ngOnInit() {
    }

    doLogin() {
        this.authService.login(this.loginData).then((response) => {
            if (response['status'] == true) {
                if (response['licence'] == 'not_set') {
                    this.router.navigate(['/licence', response['token']]);
                } else if (response['licence'] == 'set') {
                    this.adminService.getAdministrador({ token: response['token'], user: 'admin' }).then((res) => {
                        localStorage.setItem('nombre', res['data']['nombre']);
                        localStorage.setItem('avatar', res['data']['logo']);
                        localStorage.setItem('token', response['token']);
                        this.router.navigate(['/home']);
                    })
                } else if (response['licence'] == 'expired') {
                    this.router.navigate(['/licence', response['token'], 'expired']);
                }
            } else {
                this.error = 'Rut o contraseña incorrecta'
            }
        })
    }

}
