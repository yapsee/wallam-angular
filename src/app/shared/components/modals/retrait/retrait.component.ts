import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalService } from 'src/app/shared/services/modal.service';
import { WithdrwawService } from 'src/app/shared/services/withdrwaw.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.scss']
})
export class RetraitComponent implements OnInit {
  @Input() campaign!: any; 
  retraitForm!: FormGroup;

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder, private retraitService: WithdrwawService,  private notificationService: ModalService) {
    this.retraitForm = this.fb.group({
      method: ['', [Validators.required, Validators.email]],
      phone: [this.campaign?.userName, Validators.required],
     
    });
  }

  ngOnInit(): void {
    
   
  }

  askPayment() {
    const retrait = this.retraitForm.value;
      this.retraitService.askForPayment(this.campaign.id, retrait)
        .subscribe(
          () => {
            this.notificationService.showNotification('Success', 'Votre demande est en cours de traitement.', 10000); 

          },
          error => {
            this.notificationService.showNotification('Erreur', 'Une erreur sest produite.', 10000); 

          }
        );

      this.closeModal();
    }


  closeModal() {
    this.bsModalRef.hide(); 
  }
}


