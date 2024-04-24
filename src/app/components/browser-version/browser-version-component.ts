import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { APP_SETTINGS } from "src/app/shared/app.settings";

@Component({
    selector: 'app-browser-version',
    templateUrl: './browser-version-component.html',
    styleUrls: [ './browser-version-component.scss' ]
})

export class BrowserVersionComponent implements AfterViewInit, AfterViewChecked {

    heading: String = "";
    message: String = "";
    browser_support: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private cdr: ChangeDetectorRef,
    ) {

        for( let object in sessionStorage ) {
            sessionStorage.removeItem( object );
        }
    }

    public ngAfterViewChecked(): void {
        this.cdr.detectChanges();
    }

    public ngAfterViewInit(): void {
        
        this.browser_support = this.route.snapshot.queryParamMap.get( "value" );

        if( this.browser_support == APP_SETTINGS.BROWSER_SUPPORT.VERSION ) {
            this.heading = "Un-supported version";
            this.message =
                "Your browser version is not supportable, kindly update your browser";
        } else {
            this.heading = "Un-supported browser";
            this.message =
                "Currently we are not providing service for this browser, kindly use any one of the broser below";
        }
    }
}