import { Component, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-campaigns-status',
  templateUrl: './campaigns-status.component.html',
  styleUrls: ['./campaigns-status.component.scss']
})
export class CampaignsStatusComponent {
  
  @Output() statusConfirmed = new EventEmitter<string>();
  selectedStatus: string = 'OPENED';
  
  constructor(public bsModalRef: BsModalRef) {}
  
  confirmStatus() {
    this.statusConfirmed.emit(this.selectedStatus);
    this.bsModalRef.hide(); 
  }

  close() {
   
    this.bsModalRef.hide(); 
  }
}


