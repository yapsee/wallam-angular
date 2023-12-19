import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/app/shared/models/user.model';
import { ModalService } from 'src/app/shared/services/modal.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss']
})
export class UserShowComponent implements OnInit {
  @Input() user!: any; 
  userForm!: FormGroup;

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder, private userService: UserService,  private notificationService: ModalService) {
  
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: [this.user?.email, [Validators.required, Validators.email]],
      firstName: [this.user?.firstName, Validators.required],
      lastName: [this.user?.lastName, Validators.required],
      phone: [this.user?.phone, Validators.required],
     
    });
   
  }

  updateUser() {
    const updatedUser = this.userForm.value;
      this.userService.updateUser(this.user.id, updatedUser)
        .subscribe(
          () => {
            this.notificationService.showNotification('Success', 'Changement reussi.', 10000); 

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


