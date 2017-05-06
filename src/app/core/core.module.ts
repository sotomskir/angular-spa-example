import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorHandlerService } from './error-handler.service';
import { ConfigService } from './config.service';
import { AuthService } from './auth.service';
import { SpinnerService } from './spinner/spinner.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { JwtHelper } from 'angular2-jwt';
import { CanActivateViaAuthGuard } from './auth.guard';
import { ValidationService } from './validation.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [SpinnerComponent, NavComponent],
  declarations: [SpinnerComponent, NavComponent],
  providers: [
    ErrorHandlerService,
    ConfigService,
    AuthService,
    SpinnerService,
    JwtHelper,
    CanActivateViaAuthGuard,
    ValidationService,
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
