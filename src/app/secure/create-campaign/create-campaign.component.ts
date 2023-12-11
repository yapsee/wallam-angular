import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CampaignService } from 'src/app/shared/services/campaign.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {
  campaignForm!: FormGroup;

  constructor(private fb: FormBuilder, private campaignService: CampaignService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.campaignForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      target: ['', [Validators.required]],
      illustration: [null, [Validators.required]],
      kind: ['PERSONAL', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.campaignForm.valid) {
      const formData = new FormData();
      formData.append('title', this.campaignForm.get('title')!.value);
      formData.append('description', this.campaignForm.get('description')!.value);
      formData.append('target', this.campaignForm.get('target')!.value);
      formData.append('illustration', this.campaignForm.get('illustration')!.value);
      formData.append('kind', this.campaignForm.get('kind')!.value);

  
      this.campaignService.createCampaign(formData).subscribe(
        (response) => {
          console.log('Campaign created successfully!', response);
          // Handle the success, maybe redirect or show a success message
        },
        (error) => {
          console.error('Error creating campaign:', error);
          // Handle the error, maybe show an error message
        }
      );
    }
  }
}