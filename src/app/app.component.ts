import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <kendo-treelist
            [kendoTreeListFlatBinding]="data"
            kendoTreeListExpandable
            idField="id"
            parentIdField="managerId"
        >
            <kendo-treelist-column [expandable]="true" field="name" title="Name"> </kendo-treelist-column>
            <kendo-treelist-column field="title" title="Title"></kendo-treelist-column>
            <kendo-treelist-column field="phone" title="Phone"></kendo-treelist-column>
        </kendo-treelist>
    `,
})
export class AppComponent {
  public data: any[] = [
    {
      id: 1,
      name: 'Dary Sweeney',
      title: 'Chief Executive Officer',
      phone: '(555) 924-9726',
      managerId: null,
    },
    {
      id: 2,
      name: 'Guy Wooten',
      title: 'Chief Technical Officer',
      phone: '(438) 738-4935',
      managerId: 1,
    },
    {
      id: 32,
      name: 'Buffy Weber',
      title: 'VP, Engineering',
      phone: '(699) 838-6121',
      managerId: null,
    },
  ];
}
