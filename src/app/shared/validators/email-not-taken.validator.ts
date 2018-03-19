import { AbstractControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { UsersService } from './../../users/shared/users.service';

export function emailNotTaken(usersService: UsersService) {
  return (control: AbstractControl) => {
    return usersService.getByEmail(control.value)
      .debounceTime(1000)
      .distinctUntilChanged()
      .map(res => {
        return !res ? null : { emailTaken: true };
      });
  }
} 