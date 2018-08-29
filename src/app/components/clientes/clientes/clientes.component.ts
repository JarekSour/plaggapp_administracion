import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class ClientesComponent implements OnInit {

    client = [];

    constructor(
        public clientService: ClienteService,
        public authService: AuthService,
        public router: Router
    ) { }

    ngOnInit() {
        this.clientService.getAllClient({ token: localStorage.getItem('token'), user: 'admin' }).then((response) => {
            if (response['status']) {
                this.client = response['data'];
            } else if (response['data'] == 'expired') {
                this.authService.closeSession();
                this.router.navigate(['/login']);
            }
        })
    }

}
