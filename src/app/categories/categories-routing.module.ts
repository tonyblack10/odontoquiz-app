import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { FormCategoriesComponent } from './form-categories/form-categories.component';

const routes: Routes = [
  { path: '', component: ListCategoriesComponent },
  { path: 'edit/:id', component: FormCategoriesComponent },
  { path: 'new', component: FormCategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}