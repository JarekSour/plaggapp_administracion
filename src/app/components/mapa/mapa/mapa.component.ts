import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PuntoService } from '../../../services/punto/punto.service';
import { AuthService } from '../../../services/auth/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class MapaComponent implements OnInit {

    type: any;
    id: any;
    lat: number;
    lng: number;
    zoom: number = 20;
    maxZoom: number = 22;
    mapTypeId: string = 'satellite';
    streetViewControl: boolean = false;
    markers = [];
    icon: string = 'https://i.imgur.com/pOHoEQ4.png';

    constructor(
        private location: Location,
        public puntoService: PuntoService,
        public authService: AuthService,
        public router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');

        this.route.queryParams.subscribe((params: Params) => {
            this.type = params['back'] || false;
        });

        this.puntoService.getCoordenadas({ token: localStorage.getItem('token'), user: 'admin', id: id }).then((response) => {
            for (let item of response['puntos']) {
                this.lat = parseFloat(item['mapa'].split(',')[0]);
                this.lng = parseFloat(item['mapa'].split(',')[1]);
                this.markers.push({ lat: parseFloat(item['mapa'].split(',')[0]), lng: parseFloat(item['mapa'].split(',')[1]) })
            }
        })
    }

    toBack(num) {
        switch (num) {
            case 1:
                this.location.back();
                break;
            case 2:
                window.history.go(-2);
                break;
            case 3:
                window.history.go(-3);
                break;
            default:
                break;
        }
    }

}
