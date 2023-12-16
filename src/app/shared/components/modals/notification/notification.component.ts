import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  title: string = '';
  message: string = '';

  constructor(public bsModalRef: BsModalRef) {}
}