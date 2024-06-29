import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "../common/common.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserManagementRoutingModule } from "./user-management-routing.module";
import { UserManagementComponent } from "./user-management.component";

@NgModule({
    declarations: [
        UserManagementComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UserManagementRoutingModule
    ],
    exports: [],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class UserManagementModule { }