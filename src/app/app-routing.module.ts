import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserVersionComponent } from './components/browser-version/browser-version-component';

export const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, 
  { path: "home", component: HomeComponent, loadChildren: () => import( "./components/home/home.module" ).then(x => x.HomeModule )},
  { path: "browser-support/version", component: BrowserVersionComponent },
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/page-not-found", pathMatch: "full" }
];

@NgModule({
  imports: [ RouterModule.forRoot( appRoutes )],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
