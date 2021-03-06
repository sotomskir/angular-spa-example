import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';
import { ChuckModule } from './chuck/chuck.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    AuthModule,
    SharedModule,
    CoreModule,
    UsersModule,
    LoginModule,
    HomeModule,
    ChuckModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  exports: [AppComponent],
  entryComponents: [AppComponent],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
