import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { FormCategoriesComponent } from './form-categories/form-categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ListCategoriesComponent, FormCategoriesComponent]
})
export class CategoriesModule { }
