import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { OrdenService } from '../../../services/orden/orden.service';
import { CalendarDateFormatter } from 'angular-calendar';
import { CustomDateFormatter } from './custom-date-formatter.provider';
import { CalendarEvent } from 'angular-calendar';
import { Subject } from 'rxjs/Subject';
import { DAYS_OF_WEEK } from 'angular-calendar';
import { addDays, isSameMonth, isSameDay } from 'date-fns';

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
    selector: 'app-agendamiento',
    templateUrl: './agendamiento.component.html',
    styleUrls: ['./agendamiento.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css'],
    providers: [
        {
            provide: CalendarDateFormatter,
            useClass: CustomDateFormatter
        }
    ]
})
export class AgendamientoComponent implements OnInit {

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

    constructor(
        public ordenService: OrdenService,
        public authService: AuthService,
        public router: Router
    ) { }

    ngOnInit() {
        this.ordenService.getAgendamiento({ token: localStorage.getItem('token'), user: 'admin' }).then((response) => {
            if (response['status']) {
                for (let item of response['data'])
                    this.events.push({ start: addDays(new Date(item['fecha']), 1), end: addDays(new Date(item['fecha']), 1), title: item['nombre_empresa'] + ' - ' + item['nombre'] + ' ' + item['apellido_paterno'] + ' ' + (item['apellido_materno'] ? item['apellido_materno'] : '') + ' - ' + item['servicio'], color: colors.black, meta: { id: item['id'] } })
                this.refresh.next();
            } else if (response['data'] == 'expired') {
                this.authService.closeSession();
                this.router.navigate(['/login']);
            }
        })
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
}
