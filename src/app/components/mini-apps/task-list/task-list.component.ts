import { Component } from '@angular/core';
import { ColumnModel } from 'src/app/models/column.model';
import { BaseComponent } from 'src/app/shared/base.component';
import { MiniAppsService } from 'src/app/shared/services/mini-apps.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent extends BaseComponent {

  columns: any = [];
  rowTasks: any = [];
  rowTaskCompletion: any = [];
  selectedTasks: any;
  selectedTaskCompleted: any;
  columnsCompletedTable: any = [];

  constructor( private miniAppsService: MiniAppsService ) {
    super();
  }

  async initComponent() {
    
    this.loadColumns();
    this.loadColumnsForCompletionTable();
    this.loadRows();
    this.loadRowsForCompletedTable();
  }

  loadColumns(): void  {
    this.columns = this.miniAppsService.getTaskListsColumns().map(( value:ColumnModel ) => {
      return value;
    });
  }

  loadColumnsForCompletionTable(): void {
    this.columnsCompletedTable = this.miniAppsService.getTaskCompletedListColumns().map(( value: ColumnModel ) => {
      return value;
    });
  }

  async loadRows() {
    this.rowTasks = this.miniAppsService.getTasksListsValues();
  }

  async loadRowsForCompletedTable() {
    this.rowTaskCompletion = this.miniAppsService.getTaskCompletedListsValues();
  }

  async onRowSelection( event: any ): Promise<void> {
    console.log( event["data"]["title"] + " row selected" );
  }

  async onRowUnselection( event: any ): Promise<void> {
    console.log( event["data"]["title"] + " row unselected" );
  }

  async onRowSelectionCompleted( event: any ): Promise<void> {
    console.log( event["data"]["title"] + " row selected" );
  }

  async onRowUnselectionCompleted( event: any ): Promise<void> {
    console.log( event["data"]["title"] + " row unselected" );
  }
}
