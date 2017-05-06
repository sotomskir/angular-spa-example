import { Component } from '@angular/core';
import swal from 'sweetalert2';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {

  public auth: AuthService;

  constructor(userService: AuthService) {
    this.auth = userService;
  }

  learnMoreClicked() {
    swal('The Internet?', 'That thing is still around?', 'question');
  }

}
