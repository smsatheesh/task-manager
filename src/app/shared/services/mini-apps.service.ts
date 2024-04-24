import { Injectable } from "@angular/core";
import { ColumnModel } from "src/app/models/column.model";

@Injectable({
    providedIn: "root"
})

export class MiniAppsService {

    constructor() { }

    public getTaskListsColumns(): Array<ColumnModel> {
        return [
            {
                name: "Task Title",
                field: "title",
                type: 'text'
            }
        ]
    }

    public getTasksListsValues(): any {
        return [
            {
                id: 1,
                title: "Checking..."
            }
        ]
    }
}