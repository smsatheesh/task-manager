import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "../common/common.module";
import { MiniAppsRoutingModule } from "./mini-apps-routing.module";
import { CalendarComponent } from "./calendar/calendar-component";
import { MiniAppsComponent } from "./mini-apps.component";
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
    declarations: [
        CalendarComponent,
        MiniAppsComponent,
        TaskListComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        MiniAppsRoutingModule
    ],
    exports: []
})

export class MiniAppsModule { }