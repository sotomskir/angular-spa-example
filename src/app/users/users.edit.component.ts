import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';
import { UserService } from './user.service';
import { ConfigService } from '../core/config.service';

@Component({
  templateUrl: 'users.edit.component.html',

})
export class UsersEditComponent implements OnInit {
  public user = new User();
  public userForm: FormGroup;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    public conf: ConfigService,
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.userService.getUser(+params['id']))
      .subscribe((user: User) => this.user = user);
  }

  createForm() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  save() {
    // this.userService.
  }
}
