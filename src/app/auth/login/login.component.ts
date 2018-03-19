import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './../auth.service';
import { NotificationService } from './../../shared/snackbar/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router, 
              private authService: AuthService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', Validators.required)
    });
  }

  login(user: any) {
    this.authService.login(user.email, user.password)
      .subscribe(res => {
        this.router.navigateByUrl('/');
        this.notificationService.notify('Bem vindo!');
      }, () => this.notificationService.notify('Credenciais inválidas!'));
  }

}
