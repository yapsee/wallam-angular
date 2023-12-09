import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.scss']
})
export class CampaignsListComponent {
  @Input() campaignsData: any[] = [];

}
