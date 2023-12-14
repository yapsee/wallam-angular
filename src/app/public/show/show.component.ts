import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from 'src/app/shared/models/campaign.model';
import { Transaction } from 'src/app/shared/models/transaction.model';

import { CampaignService } from 'src/app/shared/services/campaign.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  campaignId!: string;
  campaign!: Campaign ;
  transactions: Transaction[] = []; 

  constructor(private route: ActivatedRoute, private campaignService: CampaignService) {}


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.campaignId = params['id'];
      this.campaignService.getCampaignById(this.campaignId).subscribe((campaign) => {
        this.campaign = campaign;
        this.transactions = campaign?.transactions || [];
      });
    });
  }
}