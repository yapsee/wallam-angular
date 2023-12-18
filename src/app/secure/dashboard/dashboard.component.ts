import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Auth } from 'src/app/shared/classes/auth';
import { RetraitComponent } from 'src/app/shared/components/modals/retrait/retrait.component';
import { User } from 'src/app/shared/models/user.model';
import { CampaignService } from 'src/app/shared/services/campaign.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  campaigns: any;
  currentUser!: User ;
  bsModalRef!: BsModalRef;

  constructor(
    private campaignService: CampaignService,
    private modalService: BsModalService
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
 paymentForm(campaign: any) {
  const initialState = {
    campaign: campaign
  };

  this.bsModalRef = this.modalService.show(RetraitComponent, { initialState });
}
}
