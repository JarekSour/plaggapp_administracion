import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DocumentoService {

    url = 'https://api.plagapp.cl';

    constructor(public http: HttpClient) { }

    getDefaultDocs(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/documento/default/get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    deleteDefaultDoc(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/documento/default/delete', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getClientDocs(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/documento/cliente/get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    deleteClientDoc(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/documento/cliente/delete', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getTechDocs(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/documento/tecnico/get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    deleteTechDoc(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/documento/tecnico/delete', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getFirmaJefe(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/documento/firma/get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    updateFirmaJefe(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/documento/firma/update', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
