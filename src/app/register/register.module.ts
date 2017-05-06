import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RegisterRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class RegisterModule { }
