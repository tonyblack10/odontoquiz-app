import { FormGroup } from '@angular/forms';

export class ValidationUtil {
  
  static hasError(form: FormGroup, field: string, errors: Array<string>): boolean {
    return errors
        .some(err => form.get(field).hasError(err) == true) && 
          form.get(field).touched;
  }
}