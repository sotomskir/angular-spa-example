import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    model: any = {
        username: '',
        password: ''
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

    handleError(error) {
        this.error = error.error_description
          ? error.error_description
          : 'There was an error on our back-end. Please try again later.';
        this.loading = false;
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
                            this.router.navigate(['home']);
                        }, error => this.handleError(error)
                        );
                    } else {
                        this.error = 'Username or password is incorrect';
                        this.loading = false;
                    }
                },
                error => this.handleError(error)
            );
    }
}


