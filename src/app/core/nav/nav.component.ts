import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  ngOnInit() {  }

  constructor(
    public navService: NavService,
    public authService: AuthService,
  ) { }

}
