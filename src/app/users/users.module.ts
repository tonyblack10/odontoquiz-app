import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormUsersComponent } from './form-users/form-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { SharedModule } from './../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    UsersRoutingModule
  ],
  declarations: [ChangePasswordComponent, FormUsersComponent, ListUsersComponent]
})
export class UsersModule { }
