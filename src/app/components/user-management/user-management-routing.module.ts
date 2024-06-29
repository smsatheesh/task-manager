import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserManagementComponent } from "./user-management.component";

export const userManageRoutes: Routes = [
    { path: "", component: UserManagementComponent }
];

@NgModule({
    imports: [ RouterModule.forChild( userManageRoutes ) ],
    exports: [ RouterModule ]
})

export class UserManagementRoutingModule { }