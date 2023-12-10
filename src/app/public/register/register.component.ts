import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationData } from 'src/app/shared/models/registration.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      // confirmPassword: ['', Validators.required],
      cni: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.registrationForm.valid) {
      let formData: RegistrationData = this.registrationForm.value;
      
      this.authService.register(formData).subscribe(
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
}