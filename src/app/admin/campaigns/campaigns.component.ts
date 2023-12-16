import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/shared/services/campaign.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  campaigns!: any[] ;

  constructor(
    private campaignService: CampaignService
  ) {

  }

  ngOnInit(): void {

    this.campaignService.getAllCampaigns().subscribe(
      (responseData: any) => {
       this.campaigns = responseData
       this.filterCampaigns('ALL');
      }
    );
  
  }
  filteredCampaigns = this.campaigns; 
  filterCampaigns(status: string) {
    if (status === 'ALL') {
      this.filteredCampaigns = this.campaigns;
    } else {
      this.filteredCampaigns = this.campaigns.filter(campaign => campaign.status === status);
    }
  }

  editCampaign(campaign: any) {
    // Example: Toggle between 'OPENED' and 'CLOSED'
    campaign.status = campaign.status === 'OPENED' ? 'CLOSED' : 'OPENED';

    // Alternatively, you can implement more complex logic to handle different status changes

    // Log the updated campaign
    console.log('Updated campaign:', campaign);
  }
 
}
