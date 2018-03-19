import { Router } from '@angular/router';
import { ErrorHandler, Injector, Injectable, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { NotificationService } from './shared/snackbar/notification.service';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor(private notificationService: NotificationService, private ngZone: NgZone, private injector: Injector) {
    super();
  }

  handleError(errorResponse: HttpErrorResponse | any) {
    if(errorResponse instanceof HttpErrorResponse) {
      this.ngZone.run(() => {
        switch(errorResponse.status) {
          case 400:
            this.notificationService.notify('Há erros de validação no formulário. Por favor, verifique.');
            break;
          case 401:
            this.injector.get(Router).navigateByUrl('/login');
            break;
          case 404:
            this.notificationService.notify('Recurso não encontrado.');
            break;
          case 500:
            this.notificationService.notify('Ocorreu um error inesperado. Consulte o suporte.');
            console.log(errorResponse);
            break;
        }
      });
    } else {
      super.handleError(errorResponse);
      this.notificationService.notify('Ocorreu um error inesperado. Consulte o suporte.');
    }
  }

}