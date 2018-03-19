declare const jQuery:any;

import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Category } from '../shared/category.model';
import { NotificationService } from './../../shared/snackbar/notification.service';
import { CategoriesService } from './../shared/categories.service';
import { Page } from './../../shared/paginate/page.model';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html'
})
export class ListCategoriesComponent implements OnInit {

  categoryRemove: Category;
  page: Page;
  searchControl: FormControl;
  searchForm: FormGroup;

  constructor(private categoriesService: CategoriesService,
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
        this.categoriesService.getPaginated(1, query))
      .subscribe((page: Page) => {
        this.page = page
      });

    this.getCategories();
  }

  remove(_id: string) {
    this.categoriesService.remove(_id)
      .subscribe(res => {
        jQuery('#deleteModal').modal('toggle');
        this.searchControl.setValue('');
        this.getCategories();
        this.notificationService.notify('Categoria removida com sucesso.');
      });
  }

  getCategories(pageNumber = 1, search = '') {
    this.categoriesService.getPaginated(pageNumber, search)
      .subscribe((page: Page) => this.page = page);
  }

  alterPage(pageNumber: number) {
    this.getCategories(pageNumber);
  }
}
