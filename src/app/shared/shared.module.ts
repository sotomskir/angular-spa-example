import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InitCapsPipe } from './init-caps.pipe';
import { PageNotFoundComponent } from './404.component';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroupComponent } from './form-group/form-group.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    InitCapsPipe,
    PageNotFoundComponent,
    FormGroupComponent,
  ],
  exports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    InitCapsPipe,
    MaterialModule,
    PageNotFoundComponent,
    ReactiveFormsModule,
    FormGroupComponent,
  ]
})
export class SharedModule { }
