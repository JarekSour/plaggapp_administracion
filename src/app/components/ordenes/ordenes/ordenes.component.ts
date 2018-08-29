import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { TecnicoService } from '../../../services/tecnico/tecnico.service';
import { Router } from '@angular/router';
import { OrdenService } from '../../../services/orden/orden.service';
import { CalendarEvent, DAYS_OF_WEEK, CalendarDateFormatter } from 'angular-calendar';
import { Subject } from 'rxjs/Subject';
import { CustomDateFormatter } from '../../agendamiento/agendamiento/custom-date-formatter.provider';
import { AuthService } from '../../../services/auth/auth.service';
import { addDays, isSameDay, isSameMonth } from 'date-fns';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

const colors: any = {
    black: {
        primary: 'rgb(102, 101, 101)',
        secondary: 'rgb(102, 101, 101)'
    }
};

@Component({
    selector: 'app-ordenes',
    templateUrl: './ordenes.component.html',
    styleUrls: ['./ordenes.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css'
    ],
    providers: [
        {
            provide: CalendarDateFormatter,
            useClass: CustomDateFormatter
        }
    ]
})
export class OrdenesComponent implements OnInit {

    @ViewChild('modalContent') modalContent: TemplateRef<any>;

    view: string = 'month';
    viewDate: Date = new Date();
    modalData: {
        action: string;
        event: CalendarEvent;
    };
    refresh: Subject<any> = new Subject();
    events: CalendarEvent[] = [];
    activeDayIsOpen: boolean = true;
    locale: string = 'es';
    weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
    weekendDays: number[] = [DAYS_OF_WEEK.SATURDAY, DAYS_OF_WEEK.SUNDAY];

    tab1: boolean = true;
    tab2: boolean;
    tab3: boolean;
    tech: any;
    client: any;

    constructor(
        public ordenService: OrdenService,
        public router: Router,
        public techService: TecnicoService,
        public clientService: ClienteService,
        public authService: AuthService
    ) { }

    ngOnInit() {
        this.techService.getAllTech({ token: localStorage.getItem('token'), user: 'admin' }).then((response) => {
            if (response['data']) {
                this.tech = response['data'];
            } else if (response['data'] == 'expired') {
                this.authService.closeSession();
                this.router.navigate(['/login']);
            }
        })
        this.clientService.getAllClient({ token: localStorage.getItem('token'), user: 'admin' }).then((response) => {
            if (response['data']) {
                this.client = response['data'];
            } else if (response['data'] == 'expired') {
                this.authService.closeSession();
                this.router.navigate(['/login']);
            }
        })
        this.ordenService.getAllAgendamientoFinish({ token: localStorage.getItem('token'), user: 'admin' }).then((response) => {
            if (response['data']) {
                for (let item of response['data'])
                    this.events.push({ start: addDays(new Date(item['fecha']), 1), end: addDays(new Date(item['fecha']), 1), title: item['nombre_empresa'] + ' - ' + item['nombre'] + ' ' + item['apellido_paterno'] + ' ' + (item['apellido_materno'] ? item['apellido_materno'] : '') + ' - ' + item['servicio'], color: colors.black, meta: { id: item['id'] } })
                this.refresh.next();
            } else if (response['data'] == 'expired') {
                this.authService.closeSession();
                this.router.navigate(['/login']);
            }
        })
        this.eventProp(1);
    }

    eventProp(num) {
        switch (num) {
            case 1:
                this.tab1 = true;
                this.tab2 = false;
                this.tab3 = false;
                break;
            case 2:
                this.tab1 = false;
                this.tab2 = true;
                this.tab3 = false
                break;
            case 3:
                this.tab1 = false;
                this.tab2 = false;
                this.tab3 = true
                break;
            default:
                break;
        }
    }

    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }

    handleEvent(action: string, event: CalendarEvent): void {
        this.router.navigate(['/orden/detalle', event.meta.id]);
    }

}
