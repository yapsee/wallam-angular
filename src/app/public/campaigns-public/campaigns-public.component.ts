import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/shared/services/campaign.service';

@Component({
  selector: 'app-campaigns-public',
  templateUrl: './campaigns-public.component.html',
  styleUrls: ['./campaigns-public.component.scss']
})
export class CampaignsPublicComponent implements OnInit {
  campaigns: any;

  constructor(
    private campaignService: CampaignService
  ) {

  }

  ngOnInit(): void {

    this.campaignService.getVerifiedCampaigns().subscribe(
      (responseData: any) => {
       this.campaigns = responseData
      }
    );
  
  }
 
}
