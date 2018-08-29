import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteService {

    url = 'https://api.plagapp.cl';

    constructor(public http: HttpClient) { }

    getAllClient(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/cliente/list', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    newClient(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/cliente/new', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    updateAvatar(file, id) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("image", file);
            formData.append('id', id);
            formData.append('token', localStorage.getItem('token'));
            formData.append('user', 'admin');

            this.http.post(this.url + "/cliente/avatar/update", formData)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getClientById(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/cliente/get-by-id', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    updateClient(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/cliente/update', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    updatePass(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/cliente/pass/update', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    hideClient(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/cliente/hide', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    showClient(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/cliente/show', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getInformeUso(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/punto/informe', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
