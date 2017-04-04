import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { PageNotFoundComponent } from "./components/shared/404.component";
import { UsersComponent } from "./components/users/users.component";
import { HomeComponent } from "./components/home/home.component";
import { CanActivateViaAuthGuard } from "./guards/auth.guard";
import { ChuckNorrisComponent } from "./components/chuckNorris/chuckNorris.component";

const routes: Routes = [
  { path: 'chuckNorris', component: ChuckNorrisComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '',      component: HomeComponent,  canActivate: [CanActivateViaAuthGuard] },
  { path: '**',    component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
