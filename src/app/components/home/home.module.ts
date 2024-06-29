import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "../common/common.module";
import { SharedModule } from "src/app/shared/shared.module";

import { HomeRoutingModule } from "./home-routing.module";
import { UserAccountComponent } from "./user-account/user-account.component";

@NgModule({
    declarations:[
        UserAccountComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule
    ],
    exports: [

    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class HomeModule {}