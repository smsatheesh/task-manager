import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "app-loading-spinner",
    templateUrl: "./loading-spinner.component.html",
    styleUrls: [ "./loading-spinner.component.scss" ],
    encapsulation: ViewEncapsulation.None
})

export class LoadingSpinnerComponent {
    
    displaySpinner = true;
    modalSpinner = false;

    @Input() set modal( value: boolean ) {
        this.modalSpinner = value;
    }

    @Input() set display( value: boolean ) {
        this.displaySpinner = value;
    } 
}