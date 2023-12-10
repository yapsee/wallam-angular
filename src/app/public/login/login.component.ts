import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

    constructor(
      private authService: AuthService,
      private router: Router,
      private formBuilder: FormBuilder
    ) {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
    }
  
    ngOnInit(): void {}
  
    submit() {
      if (this.loginForm.valid) {
        let data = this.loginForm.getRawValue();
        this.authService.authentification(data).subscribe(
          (responseData: any) => {
            localStorage.setItem('token', responseData['token']);
            this.router.navigateByUrl('dashboard');
          },
          (error) => {
            if (error.status === 500 && error.error && error.error.exception === 'BadCredentialsException') {
              //this.openModal('Bad Credentials', 'The email or password is incorrect. Please try again.');
            } else {
              console.error('Unexpected error:', error);
            }
          }
        );
      }
    }
  
    // openModal(title: string, message: string) {
    //   const modalRef = this.modalService.open(ModalComponent); // ModalComponent should be replaced with the actual name of your modal component
    //   modalRef.componentInstance.title = title;
    //   modalRef.componentInstance.message = message;
    // }
  }