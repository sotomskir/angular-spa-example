import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersIndexComponent } from './users.index.component';
import { UsersCreateComponent } from './users.create.component';
import { UsersEditComponent } from './users.edit.component';
import { UsersShowComponent } from './users.show.component';
import { UserService } from './user.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
  ],
  declarations: [
    UsersIndexComponent,
    UsersCreateComponent,
    UsersEditComponent,
    UsersShowComponent
  ],
  providers: [UserService]
})
export class UsersModule { }
