import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CampaignsStatusComponent } from 'src/app/shared/components/modals/campaigns-status/campaigns-status.component';
import { CampaignService } from 'src/app/shared/services/campaign.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  campaigns!: any[] ;
  bsModalRef!: BsModalRef;

  constructor(
    private campaignService: CampaignService, 
    private modalService: BsModalService
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

  openStatusSelectionModal(campaign: any) {
    
    const initialState = {
      selectedStatus: campaign.status
    };

    this.bsModalRef = this.modalService.show(CampaignsStatusComponent, { initialState });

    this.bsModalRef.content.statusConfirmed.subscribe((selectedStatus: string) => {

      campaign.status = selectedStatus;
      console.log('Updated campaign:', campaign);
    });
  }
 
}
