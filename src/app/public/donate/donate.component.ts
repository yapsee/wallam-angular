import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignService } from 'src/app/shared/services/campaign.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent  implements OnInit {
  paymentForm!: FormGroup;
  campaignId!: string;


  constructor(private fb: FormBuilder, private campaignService: CampaignService, private route: ActivatedRoute, private router: Router,) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.campaignId = params['id'];
    });
    this.initForm();
  }

  initForm(): void {
    this.paymentForm = this.fb.group({
      amount: [null, [Validators.required, Validators.min(500), Validators.max(10000000)]],
      donatorName: [''],
      comment: ['']
    });
  }

  submit() {
    if (this.paymentForm.valid) {
      let data = this.paymentForm.getRawValue();
      this.campaignService.donate(data, this.campaignId).subscribe(
        (responseData: any) => {
          const redirectUrl = responseData.paydunyInvoiceUrl; 
          window.location.href = redirectUrl;
        },
        (error) => {
          if (error.status === 500 && error.error && error.error.exception === 'BadCredentialsException') {
           
          } else {
            console.error('Unexpected error:', error);
          }
        }
      );
    }
  }
}