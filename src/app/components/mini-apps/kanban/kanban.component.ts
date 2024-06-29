import { Component, ViewEncapsulation } from "@angular/core";
import { BaseComponent } from "src/app/shared/base.component";

@Component({
    selector: 'app-kanban',
    templateUrl: './kanban.component.html',
    styleUrls: [ './kanban.component.scss' ],
    encapsulation: ViewEncapsulation.None
})

export class KanbanComponent extends BaseComponent {

    backLogDetails: any = [];
    workLogDetails: any = [];
    dynamicCard: any = [];
    size: number = 0;
    columns: number[];
    sideBarEditable: boolean = false;
    clickedData: any;

    constructor() {
        super();
    }

    async initComponent() {
        this.columns = [];
        this.size = this.columns.length;
        this.backLogDetails.push({ title: "entry", description: "123" });
        this.workLogDetails.push({ description: "098" });
    }

    public generateNewBackLogCard(): void {
        this.backLogDetails.push({
            title: "Fantastic",
            description: "s"
        });
        console.log( this.backLogDetails );
    }

    public generateNewWorkLogCard(): void {
        this.workLogDetails.push({
            description: "k"
        });
    }

    public generateDynamicCard(): void {
        this.dynamicCard.push([  ]);
        this.columns.push( ++this.size );
        this.dynamicCard[ this.dynamicCard[ 'length' ] - 1 ].push({
            title: "Karthika",
            description: "satheesh"
        });
        console.log( this.dynamicCard, " ", this.columns );
    }

    public generateDynamicCardInternally( index: number ): void {
        this.dynamicCard[ index ].push({
            title: "Karthika",
            description: "satheesh"
        });
    }

    public editCard( data: any ): void {
        this.sideBarEditable = true;
        this.clickedData = data;
    }
}