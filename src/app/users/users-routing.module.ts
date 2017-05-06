import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersIndexComponent } from './users.index.component';
import { CanActivateViaAuthGuard } from '../core/auth.guard';
import { UsersShowComponent } from './users.show.component';
import { UsersEditComponent } from './users.edit.component';
import { UsersCreateComponent } from './users.create.component';

const routes: Routes = [
  { path: 'users', component: UsersIndexComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'users/:id', component: UsersShowComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'users/:id/edit', component: UsersEditComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'users/create', component: UsersCreateComponent, canActivate: [CanActivateViaAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
