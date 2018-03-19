import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UsersService } from './../shared/users.service';
import { ValidationUtil } from './../../shared/validation-util';
import { NotificationService } from './../../shared/snackbar/notification.service';
import { CustomValidator } from './../shared/custom-validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent implements OnInit {

  title = "Alterar Senha";
  changePasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private usersService: UsersService, 
              private notificationService: NotificationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: this.formBuilder.control('', Validators.required),
      newPassword: this.formBuilder
        .control('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      newPasswordConfirmation: this.formBuilder
        .control('', [Validators.required])
    });

    this.changePasswordForm.setValidators([
      CustomValidator.newPasswordsEquals,
      CustomValidator.newPasswordsNotEqualsToCurrentPassword
    ]);
  }

  save(value: any) {
    this.usersService
      .changePassword(value.currentPassword, value.newPassword)
      .subscribe(() => {
        this.router.navigateByUrl('/');
        this.notificationService.notify('Senha alterada com sucesso.');
      }, err => {
        if(err.status === 400)
          this.notificationService.notify('O formulário foi preenchido com dados inválidos');
      });
  }

  hasError(form: FormGroup, field: string, ...errors: Array<string>): boolean {
    return ValidationUtil.hasError(form, field, errors);
  }

}