import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalService } from 'src/app/shared/services/modal.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  userAddForm!: FormGroup;

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder, private userService: UserService,  private notificationService: ModalService) {
    this.userAddForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      role: [[''], Validators.required],
      cni: [[''], Validators.required],
      address: [[''], Validators.required],
      password: ['', Validators.required],
      confirmPassword: [[''], Validators.required],
     
    });
  }

  ngOnInit(): void {
    
   
  }

  addUser() {
    if (this.userAddForm.valid) {
      const user = this.userAddForm.value;
        this.userService.addUser( user)
          .subscribe(
            () => {
              this.notificationService.showNotification('Success', 'Ajout reussi.', 10000); 

            },
            error => {
              this.notificationService.showNotification('Erreur', 'Une erreur sest produite.', 10000); 

            }
          );
       
    }
    else {
      this.notificationService.showNotification('Validation', 'Merci de remplir correctement les champs.', 10000); 

     }
     this.closeModal();
  }

  closeModal() {
    this.bsModalRef.hide(); 
  }
}


