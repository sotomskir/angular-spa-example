import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from '../core/auth.guard';
import { ChuckComponent } from './chuck.component';

const routes: Routes = [
  { path: 'chuck', component: ChuckComponent, canActivate: [CanActivateViaAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ChuckRoutingModule { }
