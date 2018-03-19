import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Category } from './../../categories/shared/category.model';
import { Question, Option } from './../shared/question.model';
import { CategoriesService } from './../../categories/shared/categories.service';
import { NotificationService } from './../../shared/snackbar/notification.service';
import { QuestionsService } from './../shared/questions.service';
import { ValidationUtil } from './../../shared/validation-util';

@Component({
  selector: 'app-form-questions',
  templateUrl: './form-questions.component.html'
})
export class FormQuestionsComponent implements OnInit {

  categories: Category[];
  questionForm: FormGroup;
  title = 'Cadastrar Pergunta';
  OPTIONS = [0,1,2,3];

  constructor(private formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private questionsService: QuestionsService,
              private categoriesService: CategoriesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const _id = this.activatedRoute.snapshot.params['id'];

    this.categoriesService.getAll()
      .subscribe(categories => this.categories = categories);

    this.questionForm = this.formBuilder.group({
      _id: this.formBuilder.control(''),
      text: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]),
      options: this.formBuilder.array(this._createOptions()),
      category: this.formBuilder.control('', Validators.required),
      explanation: this.formBuilder.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(600)]),
      answer: this.formBuilder.control('', Validators.required)
    });

    if(_id) this._fillsFields(_id);
  }

  get formData() { return <FormArray>this.questionForm.get('options'); }

  save(question: any) {
    this._prepareQuestionToSave(question);
    
    if(!question._id) {
      this.questionsService.save(question)
        .subscribe(() => {
          this.router.navigateByUrl('/questions');
          this.notificationService.notify('Pergunta cadastrada com sucesso.');
        });
    } else {
      console.log('success2');
      this.questionsService.update(question, question._id)
        .subscribe(() => {
          this.router.navigateByUrl('/questions');
          this.notificationService.notify('Pergunta editada com sucesso.');
        });
    }
  }
  
  private _createOptions(optionsList?: Option[]): FormGroup[] {
    let options: FormGroup[] = [];
    for(let i=0; i<this.OPTIONS.length; i++) {    
      options.push(this.formBuilder.group({
        _id: '',
        text: this.formBuilder.control('', [Validators.required, Validators.maxLength(250)]),
        isCorrect: false
      }));
    }

    return options;
  }

  private _prepareQuestionToSave(question: any) {
    question.options.forEach((option, index) => {
      if(index == question.answer) 
        option.isCorrect = true;
      else 
        delete option.isCorrect;
    });

    delete question.answer;

    if(!question._id)
      question.options.map(option => delete option._id);
  }

  private _fillsFields(_id: string) {
    this.questionsService.getById(_id)
      .subscribe(question => {
        this.questionForm.get('_id').setValue(question._id);
        this.questionForm.get('text').setValue(question.text);
        this.questionForm.get('category').setValue(question.category);
        this.questionForm.get('explanation').setValue(question.explanation);
        for(let i=0; i<this.OPTIONS.length; i++) {
          if(question.options[i].isCorrect) 
            this.questionForm.get('answer').setValue(i);

          this.questionForm.get('options').patchValue(question.options);
        }
      });
  }

  hasError(form: FormGroup, field: string, ...errors: Array<string>): boolean {
    return ValidationUtil.hasError(form, field, errors);
  }
}
