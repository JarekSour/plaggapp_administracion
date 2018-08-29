import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PuntoService {

    url = 'https://api.plagapp.cl';

    constructor(public http: HttpClient) { }

    getImagePunto(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/punto/image', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getInfoPunto(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/punto/detail', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getCoordenadas(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/punto/coordenadas', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
