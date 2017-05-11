import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { NavService } from './core/nav/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public authService: AuthService,
    // public navService: NavService,
  ) {}

}
