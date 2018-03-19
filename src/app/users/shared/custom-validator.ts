import { AbstractControl } from '@angular/forms';

export class CustomValidator {
  
  static newPasswordsEquals(group: AbstractControl): {[key: string]: boolean} {
    const newPassword = group.get('newPassword');
    const newPasswordConfirmation = group.get('newPasswordConfirmation');
    if(!newPassword || !newPasswordConfirmation) {
      return undefined;
    }

    if(newPassword.value !== newPasswordConfirmation.value) {
      return { newPasswordNotMatch: true };
    }

    return null;
  }


  static newPasswordsNotEqualsToCurrentPassword(group: AbstractControl): {[key: string]: boolean} {
      const currentPassword = group.get('currentPassword');
      const newPassword = group.get('newPassword');
    if(!newPassword || !currentPassword) {
      return undefined;
    }

    if(newPassword.value === currentPassword.value) {
      return { newPasswordEqualToCurrent: true };
    }

    return null;
  }


}