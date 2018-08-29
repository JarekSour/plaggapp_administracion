import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

    url = 'https://api.plagapp.cl';

    constructor(public http: HttpClient) { }

    login(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/administrador/login', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    closeSession() {
        window.localStorage.clear();
    }

    validateLicence(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/licencia/validate-lic', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getDateLicence(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/licencia/get-date', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    copyYear(){
        return new Date().getFullYear();
    }

}
