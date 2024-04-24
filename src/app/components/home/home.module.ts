import { NgModule } from "@angular/core";
import { CommonModule } from "../common/common.module";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
    declarations:[],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule
    ],
    exports: [
    ]
})

export class HomeModule {}