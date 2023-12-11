import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/shared/services/campaign.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  campaigns: any;

  constructor(
    private campaignService: CampaignService
  ) {

  }

  ngOnInit(): void {

    this.campaignService.getAllCampaigns().subscribe(
      (responseData: any) => {
       this.campaigns = responseData
      }
    );
  
  }
 
}
