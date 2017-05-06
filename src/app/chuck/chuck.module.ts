import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuckRoutingModule } from './chuck-routing.module';
import { ChuckComponent } from './chuck.component';
import { ChuckService } from './chuck.service';

@NgModule({
  imports: [
    CommonModule,
    ChuckRoutingModule
  ],
  declarations: [ChuckComponent],
  providers: [ChuckService]
})
export class ChuckModule { }
