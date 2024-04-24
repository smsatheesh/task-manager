import { NgModule } from "@angular/core";
import { CommonModule } from "../common/common.module";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    declarations:[
        DashboardComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        DashboardRoutingModule
    ],
    exports: [
        
    ]
})

export class DashboardModule { }