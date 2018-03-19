import { ValidationUtil } from './../../shared/validation-util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NotificationService } from './../../shared/snackbar/notification.service';
import { UsersService } from './../shared/users.service';
import { fieldsNotMatch } from './../../shared/validators/fields-not-match.validator';
import { emailNotTaken } from './../../shared/validators/email-not-taken.validator';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html'
})
export class FormUsersComponent implements OnInit {

  userForm: FormGroup;
  title = 'Cadastrar Usuário';

  constructor(private formBuilder: FormBuilder, 
              private usersService: UsersService,
              private notificationService: NotificationService, 
              private router: Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(4), Validators.maxLength(200)]),
      email: this.formBuilder.control('', 
        [Validators.required, Validators.email, Validators.maxLength(200)], emailNotTaken(this.usersService)),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      confirmPassword: this.formBuilder.control('', Validators.required)
    });

    this.userForm.setValidators(fieldsNotMatch('password', 'confirmPassword'));
  }

  save(value) {
    this.usersService.save(value)
      .subscribe(() => {
        this.router.navigateByUrl('/users');
        this.notificationService.notify('Usuário cadastrado com sucesso.');
      });
  }

  hasError(form: FormGroup, field: string, ...errors: Array<string>): boolean {
    return ValidationUtil.hasError(form, field, errors);
  }
}
