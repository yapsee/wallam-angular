import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/classes/auth';
import { User } from 'src/app/shared/models/user.model';
import { CampaignService } from 'src/app/shared/services/campaign.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  campaigns: any;
  currentUser!: User ;

  constructor(
    private campaignService: CampaignService
  ) {

  }

  ngOnInit(): void {

    this.campaignService.getCurrentUserCampaigns().subscribe(
      (responseData: any) => {
       this.campaigns = responseData
      }
    );


    this.currentUser = Auth.user;

  }
 
}
