import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  templateUrl: 'users.create.component.html',

})
export class UsersCreateComponent implements OnInit {
  public user = new User;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.userService.getUser(+params['id']))
      .subscribe((user: User) => this.user = user);
  }

}
