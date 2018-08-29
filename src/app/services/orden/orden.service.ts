import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrdenService {

    url = 'https://api.plagapp.cl';

    constructor(public http: HttpClient) { }

    newOrden(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/orden/new', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getAgendamiento(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/orden/agendamiento', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getOrderByClien(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/orden/list-by-client', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getOrderByTech(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/orden/list-by-tech', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getAllAgendamientoFinish(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/orden/agendamiento-finish', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getInfoOrden(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/orden/detail', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
