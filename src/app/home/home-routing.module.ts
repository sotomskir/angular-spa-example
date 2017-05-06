import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from '../core/auth.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: 'home',      component: HomeComponent,  canActivate: [CanActivateViaAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
