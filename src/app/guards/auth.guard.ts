import { AuthService } from "../services/auth.service";
import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate() {
    return this.authService.isAuthenticated();
  }
}