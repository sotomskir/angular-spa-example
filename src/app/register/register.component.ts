import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../core/validation.service';
import { UserService } from '../users/user.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;

  formErrors = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'password': '',
    'passwordConfirm': '',
  };

  constructor(
    private fb: FormBuilder,
    private validationService: ValidationService,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.registerForm = this.fb.group({
      firstName:       ['', [Validators.required, Validators.minLength(2)]],
      lastName:        ['', [Validators.required, Validators.minLength(2)]],
      email:           ['', [Validators.required, Validators.email]],
      password:        ['', [Validators.required, Validators.minLength(2)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(2)]]
    }, {validator: ValidationService.matchingPasswords('password', 'passwordConfirm')});

    this.registerForm.valueChanges.subscribe(
      () => this.validationService.validate(this.registerForm, this.formErrors)
    );

    this.validationService.validate(this.registerForm, this.formErrors); // (re)set validation messages now
  }

  onSubmit() {
    this.submitted = true;
    this.userService.register(this.registerForm.value)
      .subscribe(() => {
        swal({
          title: 'Success',
          text: 'User registered. Check your email.',
          type: 'success',
          confirmButtonText: 'Go to login page'
        })
          .then(() => this.router.navigate(['/login']))
          .catch(() => this.router.navigate(['/login']));
      }, error => {
        swal('Error', error, 'error');
      });
  }

}
