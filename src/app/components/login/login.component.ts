import {Component, OnInit} from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    model: any = {
        username: 'user',
        password: 'password'
    };
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }


    login() {
        this.loading = true;
        this.error = '';
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                result => {
                    if (result === true) {
                        this.authenticationService.getUser().subscribe(user => {
                            this.authenticationService.setUser(user);
                            this.router.navigate(['/']);
                        });
                    } else {
                        this.error = 'Username or password is incorrect';
                        this.loading = false;
                    }
                },
                error => {
                    console.log('error', error);
                    this.error = 'There was an error on our back-end. Please try again later.';
                    this.loading = false;
                }
            );
    }
}


