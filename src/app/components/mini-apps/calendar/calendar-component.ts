import { Component, signal, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from '../../../../events/event-utils';
import { BaseComponent } from 'src/app/shared/base.component';

@Component({
    selector: "app-calander",
    templateUrl: "./calendar-component.html",
    styleUrls:  [ "./calendar-component.scss" ],
    encapsulation: ViewEncapsulation.None
})

export class CalendarComponent extends BaseComponent {

    calendarVisible = signal( true );
    calendarOptions = signal<CalendarOptions>({
        plugins: [
            interactionPlugin,
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
        ],
        headerToolbar: {
            left: 'prev, next, today',
            center: 'title',
            right: 'dayGridMonth, timeGridWeek, timeGridDay, listWeek'
        },
        initialView: 'dayGridMonth',
        initialEvents: INITIAL_EVENTS,
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        select: this.handleDateSelect.bind( this ),
        eventClick: this.handleEventClick.bind( this ),
        eventsSet: this.handleEvents.bind( this )
    });
    currentEvents = signal<EventApi[]>([]);

    constructor(private changeDetector: ChangeDetectorRef) {
        super();
    }

    async initComponent() {
        
    }

    handleCalendarToggle() {
        this.calendarVisible.update((bool) => !bool);
    }

    handleWeekendsToggle() {

        this.calendarOptions.mutate((options) => {
            options.weekends = !options.weekends;
        });
    }

    handleDateSelect( selectInfo: DateSelectArg ) {

        const title = prompt( "Please enter a new title for your event" );
        const calendarApi = selectInfo.view.calendar;

        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            });
        }
    }

    handleEventClick( clickInfo: EventClickArg ) {

        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove();
        }
    }

    handleEvents( events: EventApi[] ) {
        
        this.currentEvents.set( events );
        this.changeDetector.detectChanges();
    }

    addEventDb( obj: any ): void {

    }

    updateEventDb( obj: any ): void {

    }

    removeEventDb( obj: any ): void {

    }
}