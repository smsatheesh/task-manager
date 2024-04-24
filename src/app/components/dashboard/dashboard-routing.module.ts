import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardComponent } from "./dashboard.component";

export const DashboardRoutes: Routes = [
    { path: "dashboard", component: DashboardComponent }
]

@NgModule({
    declarations:  [],
    imports: [
        RouterModule.forChild( DashboardRoutes ),
        SharedModule
    ]
})

export class DashboardRoutingModule { }