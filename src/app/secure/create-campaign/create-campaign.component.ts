import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampaignService } from 'src/app/shared/services/campaign.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {
  campaignForm!: FormGroup;

  constructor(private fb: FormBuilder, private campaignService: CampaignService, private modalService: ModalService,  private router: Router,) {}

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
          this.modalService.showNotification('Succes', 'Campagne créee avec succes.', 10000); 
          this.router.navigateByUrl('dashboard');
        },
        (error) => {
          this.modalService.showNotification('serveur', 'Merci de verifier les informations.', 10000); 
        }
      );
    }

    else {
      this.modalService.showNotification('Validation', 'Merci de remplir correctement les champs.', 10000); 
    }
  }
}