import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarComponent } from "./calendar/calendar-component";
import { TaskListComponent } from "./task-list/task-list.component";

export const miniAppsRoutes: Routes = [
    { path: "", redirectTo: "/calendar", pathMatch: "full" },
    { path: "calendar", component: CalendarComponent },
    { path: "tasks", component: TaskListComponent },
    { path: "**", redirectTo: "/page-not-found", pathMatch: "full" }
]

@NgModule({
    imports: [ RouterModule.forChild( miniAppsRoutes )],
    exports: [ RouterModule ]
})

export class MiniAppsRoutingModule { }