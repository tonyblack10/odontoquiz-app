import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormQuestionsComponent } from './form-questions/form-questions.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { SharedModule } from './../shared/shared.module';
import { QuestionsRoutingModule } from './questions-routing.module';

@NgModule({
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [FormQuestionsComponent, ListQuestionsComponent]
})
export class QuestionsModule { }
