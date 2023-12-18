import { Component, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent {

  
    @Output() paymentStatus = new EventEmitter<string>();
    selectedStatus: string = 'PENDING';
    
    constructor(public bsModalRef: BsModalRef) {}
    
    confirmPayment() {
      this.paymentStatus.emit(this.selectedStatus);
      this.bsModalRef.hide(); 
    }
  
    close() {
     
      this.bsModalRef.hide(); 
    }
  }



