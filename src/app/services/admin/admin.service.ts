import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdminService {

    url = 'https://api.plagapp.cl';

    constructor(public http: HttpClient) { }

    getAdministrador(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/administrador/get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getInforme(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/administrador/informe', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getDataADMIN(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/administrador/get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getEstadisticas(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/administrador/estadisticas', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
