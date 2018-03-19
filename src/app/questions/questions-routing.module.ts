import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { FormQuestionsComponent } from './form-questions/form-questions.component';

const routes: Routes = [
  { path: '', component: ListQuestionsComponent },
  { path: 'edit/:id', component: FormQuestionsComponent },
  { path: 'new', component: FormQuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule {}
