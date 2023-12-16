import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss']
})
export class UserShowComponent implements OnInit {
  @Input() user!: any; 
  userForm!: FormGroup;

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      email: [this.user?.email, [Validators.required, Validators.email]],
      firstName: [this.user?.firstName, Validators.required],
      lastName: [this.user?.lastName, Validators.required],
      phone: [this.user?.phone, Validators.required],
     
    });
  }

  ngOnInit(): void {
    
   
  }

  updateUser() {
    // Validate the form
    if (this.userForm.valid) {
      // Extract updated user information from the form
    
            // Optionally handle success (e.g., show a success message)
            console.log('User updated successfully', this.userForm.value);
       
      // Close the modal
      this.closeModal();
    }
  }


  closeModal() {
    this.bsModalRef.hide(); 
  }
}


