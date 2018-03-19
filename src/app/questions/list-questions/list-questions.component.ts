declare const jQuery:any;

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { QuestionsService } from './../shared/questions.service';
import { Question } from './../shared/question.model';
import { NotificationService } from './../../shared/snackbar/notification.service';
import { Page } from './../../shared/paginate/page.model';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html'
})
export class ListQuestionsComponent implements OnInit {

  page: Page;
  questionRemove: Question;
  searchControl: FormControl;
  searchForm: FormGroup;

  constructor(private questionsService: QuestionsService,
              private notificationService: NotificationService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(query => 
        this.questionsService.getPaginated(1, query))
      .subscribe((page: Page) => {
        this.page = page
      });

    this.getQuestions();
  }

  remove(_id: string) {
    this.questionsService.delete(_id)
      .subscribe(res => {
        jQuery('#deleteModal').modal('toggle');
        this.searchControl.setValue('');
        this.getQuestions();
        this.notificationService.notify('Pergunta removida com sucesso.');
      })
  }

  private getQuestions(pageNumber = 1, search = '') {
    this.questionsService.getPaginated(pageNumber, search)
      .subscribe((page: Page) => this.page = page);
  }

  alterPage(pageNumber: number) {
    this.getQuestions(pageNumber);
  }
}
