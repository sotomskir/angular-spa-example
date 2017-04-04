import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { User } from "../../models/User";
import swal from "sweetalert2";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {

  private user: User;
  private auth: AuthService;

  constructor(userService: AuthService) {
    this.auth = userService;
  }

  learnMoreClicked() {
    swal('The Internet?', 'That thing is still around?', 'question');
  }

}
