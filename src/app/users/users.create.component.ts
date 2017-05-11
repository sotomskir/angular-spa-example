import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { UserService } from './user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'users.create.component.html',
})
export class UsersCreateComponent implements OnInit {
  public user = new User();
  public userForm: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.userForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  onSubmit() {
    this.userService.create(this.userForm.value)
      .subscribe(() => {
        this.router.navigate(['/users']);
      });
  }

  cancel() {
    this.router.navigate(['/users']);
  }
}
