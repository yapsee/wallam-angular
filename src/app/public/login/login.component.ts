import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { NotificationComponent } from 'src/app/shared/components/notification/notification.component';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  bsModalRef!: BsModalRef;


    constructor(
      private authService: AuthService,
      private router: Router,
      private formBuilder: FormBuilder,
      private modalService: BsModalService
    ) {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
    }
  
    ngOnInit(): void {}
  
    submit() {
      if (this.loginForm.valid) {
        localStorage.removeItem('token');
        let data = this.loginForm.getRawValue();
        this.authService.authentification(data).subscribe(
          (responseData: any) => {
            localStorage.setItem('token', responseData['token']);
            this.router.navigateByUrl('dashboard');
          },
          (error) => {
            if (error.status === 500 && error.error && error.error.exception === 'BadCredentialsException') {
              this.openModal('Bad Credentials', 'Email ou mot de passe incorrect');
            } else {
              this.openModal('Validation', 'Merci de remplir correctement les champs.');
            }
          }
        );
      }
      else {
        this.openModal('Form Validation', 'Please fill in all required fields correctly.');
      }
    }
    openModal(title: string, message: string) {
      const initialState = { title, message };
      this.bsModalRef = this.modalService.show(NotificationComponent, { initialState });
  
    }
  }