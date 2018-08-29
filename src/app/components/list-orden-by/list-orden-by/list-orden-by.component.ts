import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdenService } from '../../../services/orden/orden.service';
import { AuthService } from '../../../services/auth/auth.service';



@Component({
    selector: 'app-list-orden-by',
    templateUrl: './list-orden-by.component.html',
    styleUrls: ['./list-orden-by.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class ListOrdenByComponent implements OnInit {

    p: number = 1;
    tipo: any;
    ordenes: any;

    constructor(
        public authService: AuthService,
        public ordenService: OrdenService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        let tipo = this.route.snapshot.paramMap.get('tipo');

        switch (tipo) {
            case 'cliente':
                this.tipo = 'cliente';
                this.ordenService.getOrderByClien({ token: localStorage.getItem('token'), user: 'admin', id: id }).then((response) => {
                    this.ordenes = response['data'];
                })
                break;
            case 'tecnico':
                this.tipo = 'técnico';
                this.ordenService.getOrderByTech({ token: localStorage.getItem('token'), user: 'admin', id: id }).then((response) => {
                    this.ordenes = response['data'];
                })
                break;

            default:
                break;
        }
    }

    toDetail(item, type) {
        this.router.navigate(['/orden/detalle', item['id']], { queryParams: { back: this.tipo } });
    }
}
