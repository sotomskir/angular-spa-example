import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  templateUrl: 'users.index.component.html',
})
export class UsersIndexComponent implements OnInit {
  public users: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void { this.getUsers(); }

  private getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    }, error => {

    });
  }

}
