declare const jQuery:any;

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Page } from './../../shared/paginate/page.model';
import { NotificationService } from './../../shared/snackbar/notification.service';
import { UsersService } from './../shared/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html'
})
export class ListUsersComponent implements OnInit {

  userRemove: any;
  page: Page;
  searchControl: FormControl;
  searchForm: FormGroup;

  constructor(private usersService: UsersService,
    private notificationService: NotificationService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    this.getUsers();
  }

  remove(_id: string) {
    this.usersService.remove(_id)
      .subscribe(res => {
        jQuery('#deleteModal').modal('toggle');
        this.searchControl.setValue('');
        this.getUsers();
        this.notificationService.notify('Usuário removido com sucesso.');
      });
  }

  getUsers(pageNumber = 1, search = '') {
    this.usersService.getPaginated(pageNumber, search)
      .subscribe((page: Page) => this.page = page);
  }

  alterPage(pageNumber: number) {
    this.getUsers(pageNumber);
  }

}
