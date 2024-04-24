import { NgModule } from "@angular/core";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
    declarations: [ LoadingSpinnerComponent ],
    imports: [
        SharedModule
    ],
    exports: [
        LoadingSpinnerComponent
    ]
})

export class CommonModule {}