import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TecnicoService {

    url = 'https://api.plagapp.cl';

    constructor(public http: HttpClient) { }

    newTech(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/tecnico/new', json)
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

            this.http.post(this.url + "/tecnico/avatar/update", formData)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getAllTech(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/tecnico/list', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getTechById(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/tecnico/get-by-id', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    updateTech(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/tecnico/update', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    updatePass(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/tecnico/pass/update', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    showTech(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/tecnico/show', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    hideTech(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/tecnico/hide', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    renewKeygen(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/tecnico/renew-keygen', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
