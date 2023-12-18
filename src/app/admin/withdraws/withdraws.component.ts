import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PayComponent } from 'src/app/shared/components/modals/pay/pay.component';
import { ModalService } from 'src/app/shared/services/modal.service';
import { WithdrwawService } from 'src/app/shared/services/withdrwaw.service';

@Component({
  selector: 'app-withdraws',
  templateUrl: './withdraws.component.html',
  styleUrls: ['./withdraws.component.scss']
})
export class WithdrawsComponent {

  withdraws : any[] = [];
  bsModalRef!: BsModalRef;
 
   constructor(
     private retraitService: WithdrwawService,
     private modalService: BsModalService,
     private notificationService: ModalService
   ) {
 
   }

   ngOnInit(): void {

    this.retraitService.getAllInvoices().subscribe(
      (responseData: any) => {
       this.withdraws = responseData
       this.filterWithdraws('ALL');
      }
    );
  
  }
 
  filteredWithdraws = this.withdraws; 
  filterWithdraws(status: string) {
    if (status === 'ALL') {
      this.filteredWithdraws = this.withdraws;
    } else {
      this.filteredWithdraws= this.withdraws.filter(wire => wire.status === status);
    }
  }




  pay(withdraw: any) {
       
    const initialState = {
      selectedStatus: withdraw.status
    };

    this.bsModalRef = this.modalService.show(PayComponent, { initialState });

    this.bsModalRef.content.paymentStatus.subscribe((selectedStatus: string) => {

      withdraw.status = selectedStatus;
      

      this.retraitService.pay(withdraw.id, selectedStatus).subscribe(
        (responseData: any) => {

          this.notificationService.showNotification('Success', 'Paiement de la collecte initialisé.', 10000); 
        },
        (error) => {
          this.notificationService.showNotification('Serveur', 'Veuillez recommencer ulterieurement svp.', 10000); 
        }
      );
    });
  }

}
