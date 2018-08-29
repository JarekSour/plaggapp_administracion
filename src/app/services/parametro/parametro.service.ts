import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ParametroService {

    url = 'https://api.plagapp.cl';

    constructor(public http: HttpClient) { }

    listTrampas(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/trampa-get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    listCebos(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/cebo-get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    listVenenos(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/veneno-get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    listInstalaciones(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/instalacion-get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    listSubAplicaciones(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/subaplicacion-get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    listSubcategoria(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/subcategoria-get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    newTrampa(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/trampa-new', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    newSubCategoria(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/subcategoria-new', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    newCebo(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/cebo-new', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    newSubAplicacion(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/subaplicacion-new', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    newVeneno(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/veneno-new', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    newInstalacion(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/instalacion-new', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    deleteTrampa(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/trampa-delete', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    deleteSubCategoria(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/subcategoria-delete', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    deleteCebo(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/cebo-delete', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    deleteSubAplicacion(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/subaplicacion-delete', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    deleteVeneno(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/veneno-delete', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    deleteInstalacion(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/parametro/instalacion-delete', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }




}
