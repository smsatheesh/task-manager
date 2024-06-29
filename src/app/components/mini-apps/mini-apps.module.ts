import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "../common/common.module";
import { MiniAppsRoutingModule } from "./mini-apps-routing.module";
import { CalendarComponent } from "./calendar/calendar-component";
import { MiniAppsComponent } from "./mini-apps.component";
import { TaskListComponent } from './task-list/task-list.component';
import { KanbanComponent } from "./kanban/kanban.component";

@NgModule({
    declarations: [
        CalendarComponent,
        MiniAppsComponent,
        TaskListComponent,
        KanbanComponent,
    ],
    imports: [
        SharedModule,
        CommonModule,
        MiniAppsRoutingModule
    ],
    exports: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class MiniAppsModule { }