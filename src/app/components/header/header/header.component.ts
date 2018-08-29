import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class HeaderComponent implements OnInit {

    nombre: any;
    avatar: any;
    menu: boolean = false;

    constructor(
        public authService: AuthService,
        public router: Router
    ) { }

    ngOnInit() {
        this.nombre = localStorage.getItem('nombre');
        this.avatar = localStorage.getItem('avatar');
    }

    closeSession() {
        this.authService.closeSession();
        this.router.navigate(['/login']);
    }

}
