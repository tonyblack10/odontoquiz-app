import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CategoriesService } from './../shared/categories.service';
import { NotificationService } from './../../shared/snackbar/notification.service';
import { Category } from './../shared/category.model';
import { ValidationUtil } from './../../shared/validation-util';

@Component({
  selector: 'app-form-categories',
  templateUrl: './form-categories.component.html'
})
export class FormCategoriesComponent implements OnInit {

  categoryForm: FormGroup;
  title = 'Cadastrar Categoria';

  constructor(private formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private categoriesService: CategoriesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const _id = this.activatedRoute.snapshot.params['id'];

    this.categoryForm = this.formBuilder.group({
      _id: this.formBuilder.control(''),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(4), Validators.maxLength(100)])
    });

    if(_id) {
      this.categoriesService.getById(_id)
        .subscribe(category => {
          this.categoryForm.get('_id').setValue(category._id);
          this.categoryForm.get('name').setValue(category.name);
          this.title = 'Editar Categoria';
        });
    }
  }

  save(category: Category) {
    if(!category._id) {
      this.categoriesService.save(category)
        .subscribe(() => {
          this.router.navigateByUrl('/categories');
          this.notificationService.notify('Categoria cadastrada com sucesso.');
        });
    } else {
      this.categoriesService.update(category, category._id)
        .subscribe(res => {
          this.router.navigateByUrl('/categories');
          this.notificationService.notify('Categoria editada com sucesso.');
        });
    }
  }

  hasError(form: FormGroup, field: string, ...errors: Array<string>): boolean {
    return ValidationUtil.hasError(form, field, errors);
  }

}
