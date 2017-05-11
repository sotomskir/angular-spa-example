import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  templateUrl: 'users.edit.component.html',

})
export class UsersEditComponent implements OnInit {
  public user = new User();
  public userForm: FormGroup;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.userService.getUser(+params['id']))
      .subscribe((user: User) => {
        this.userForm.patchValue(user);
      });
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
    this.userService.patch(this.userForm.value)
      .subscribe(() => {
        this.router.navigate(['/users']);
      });
  }

  cancel() {
    this.router.navigate(['/users']);
  }
}
