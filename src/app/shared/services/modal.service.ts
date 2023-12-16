import { Injectable } from '@angular/core';
import { NotificationComponent } from '../components/modals/notification/notification.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private bsModalRef!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  showNotification(title: string, message: string, autoHideDuration: number = 2000): void {
    this.bsModalRef = this.modalService.show(NotificationComponent, { initialState: { title, message } });

    // Automatically hide the modal after the specified duration
    setTimeout(() => {
      this.hideNotification();
    }, autoHideDuration);
  }

  hideNotification(): void {
    this.bsModalRef.hide();
  }
}