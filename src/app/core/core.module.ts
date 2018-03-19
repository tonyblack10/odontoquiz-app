import { NgModule, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtHelper } from 'angular2-jwt';

import { AuthService } from './../auth/auth.service';
import { NotificationService } from './../shared/snackbar/notification.service';
import { CategoriesService } from './../categories/shared/categories.service';
import { QuestionsService } from './../questions/shared/questions.service';
import { AuthGuardService } from './../auth/auth-guard.service';
import { UsersService } from './../users/shared/users.service';
import { TokenInterceptor } from './../auth/token.interceptor';
import { AppErrorHandler } from './../app.error-handle';

@NgModule({
  providers: [
    AuthService,
    CategoriesService,
    QuestionsService,
    AuthGuardService,
    UsersService,
    NotificationService,
    JwtHelper,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ]
})
export class CoreModule {}