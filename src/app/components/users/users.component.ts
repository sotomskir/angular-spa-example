import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { ChuckNorris } from "../../models/ChuckNorris";
import { UserService } from "../../services/user.service";
import { User } from "../../models/User";

@Component({
  selector: 'app-users-component',
  templateUrl: 'users.component.html',
})
export class UsersComponent implements OnInit {
  private users: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void { this.getUsers(); }

  private getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    }, error => {

    });
  }

}
