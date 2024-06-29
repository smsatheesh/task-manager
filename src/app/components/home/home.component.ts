import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Sidebar } from 'primeng/sidebar';
import { BaseComponent } from 'src/app/shared/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ MessageService ],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent extends BaseComponent {

  public items: MenuItem[];

  constructor() {
    super();
  }

  async initComponent() {

    this.setSideDisplayBar();
  }

  public setSideDisplayBar(): void {

    this.items = [
      {
        label: "Dashboard",
        icon: "pi pi-home",
        routerLink: [ "/home/dashboard" ]
      },
      {
        label: "Apps",
        icon: "pi pi-th-large",
        // routerLink: [ "/home/apps" ],
        items: [
          {
            label: "Calendar",
            icon: "pi pi-calendar",
            routerLink: [ "/home/apps/calendar" ]
          },
          {
            label: "Tasks",
            icon: "pi pi-check-square",
            routerLink: [ "/home/apps/tasks" ]
          },
          {
            label: "Kanban",
            icon: "pi pi-fw pi-sliders-v",
            routerLink: [ "/home/apps/kanban" ]
          }
        ]
      },
      {
        label: "User Management",
        icon: "pi pi-user",
        routerLink: [ "/home/users" ]
      }
    ];
  }
}
