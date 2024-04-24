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
  rows: any = [];
  selectTasks: any;


  constructor( private miniAppsService: MiniAppsService ) {
    super();
  }

  async initComponent() {
    
    this.loadColumns();
    this.loadRows();
  }

  loadColumns(): void  {
    this.columns = this.miniAppsService.getTaskListsColumns().map((value:ColumnModel) => {
      return value;
    });
  }

  async loadRows() {
    this.rows = this.miniAppsService.getTasksListsValues();
  }

  async rowSelection( event: any ): Promise<void> {
    console.log( "row selected" );
  }
}
