import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "./home.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { MiniAppsComponent } from "../mini-apps/mini-apps.component";

export const homeRoutes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "dashboard", component: DashboardComponent, loadChildren: () => import( "./../dashboard/dashboard.module" ).then(x => x.DashboardModule )},
    { path: "apps", loadChildren: () => import( "./../mini-apps/mini-apps.module" ).then(x => x.MiniAppsModule )},
    { path: "users", loadChildren: () => import( "./../user-management/user-management.module" ).then( x => x.UserManagementModule ) },

    { path: "**", redirectTo: "/page-not-found", pathMatch: "full" }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild( homeRoutes ),
        SharedModule
    ],
    exports: [ RouterModule ]
})

export class HomeRoutingModule { }