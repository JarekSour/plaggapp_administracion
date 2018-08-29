import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin/admin.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css',
    '../../../../assets/css/theme-default/bootstrap.css',
    '../../../../assets/css/theme-default/materialadmin.css',
    '../../../../assets/css/theme-default/font-awesome.min.css',
    '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class HomeComponent implements OnInit {

    public lineChartData: Array<any> = [
        { data: [0, 0, 0, 0, 0, 0, 0], label: 'Clientes visitados' }
    ];
    public trampaChartData: any[] = [
        { data: [], label: 'Trampas más usadas' }
    ];
    public lineChartLabels: Array<any> = [];
    public trampaChartLabels: Array<any> = [];
    public lineChartOptions: any = {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
    public lineChartColors: Array<any> = [
        {
            backgroundColor: 'rgba(125, 216, 210, 0.45)',
            borderColor: 'rgb(125, 216, 210)',
            pointBackgroundColor: 'rgb(10,168,158)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(10,168,158)'
        }
    ];
    public lineChartColors2: Array<any> = [
        {
            backgroundColor: 'rgba(255, 0, 0, 0.45)',
            borderColor: 'rgb(255, 0, 0)',
            pointBackgroundColor: 'rgb(204, 24, 24)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(204, 24, 24)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
    clientesHoy: any;
    clientesMes: any;
    tecnicosAc: any;
    clientesReg: any;

    isWarning: boolean
    isDanger: boolean
    caduca: any;
    thx: any;

    constructor(
        public authService: AuthService,
        public adminService: AdminService,
        public router: Router
    ) { }

    ngOnInit() {
        this.authService.getDateLicence({ token: localStorage.getItem('token'), user: 'admin' }).then((response) => {
            if (response['status']) {
                switch (response['data']) {
                    case 'warning': this.isWarning = true; break;
                    case 'danger': this.isDanger = true; this.thx = response['thx']; break;
                }
                this.caduca = response['date'];
            } else if (response['data'] == 'expired') {
                this.authService.closeSession();
                this.router.navigate(['/login']);
            }
        })

        this.adminService.getEstadisticas({ token: localStorage.getItem('token'), user: 'admin' }).then((response) => {
            this.clientesHoy = response['clientesHoy'];
            this.clientesMes = response['clientesMes'];
            this.tecnicosAc = response['tecnicosAc'];
            this.clientesReg = response['clientesReg'];

            let aux = [];
            for (let item of response['clientesGra'].reverse()) {
                let fecha = new Date(item.fecha);
                fecha.setDate(fecha.getDate() + 1);
                this.lineChartLabels.push(("0" + fecha.getDate()).slice(-2) + '/' + ("0" + (fecha.getMonth() + 1)).slice(-2) + '/' + fecha.getFullYear());
                aux.push(item._count);
            }

            let _lineChartData: Array<any> = new Array(this.lineChartData.length);
            _lineChartData[0] = { data: aux, label: this.lineChartData[0].label };
            this.lineChartData = _lineChartData;
            /////////////////////////////////////////////////////////////////////////////////

            let trampasUsadas = response['trampasUsadas'];
            let auxTrampaData = [];

            for (let item of trampasUsadas) {
                this.trampaChartLabels.push(item.trampa);
                auxTrampaData.push(item.count);
            }
            let _trampaChartData: Array<any> = new Array(10);
            _trampaChartData[0] = { data: auxTrampaData, label: this.trampaChartData[0].label };
            this.trampaChartData = _trampaChartData;
        });
    }

}
