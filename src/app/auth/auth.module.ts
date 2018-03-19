import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class AuthModule {}