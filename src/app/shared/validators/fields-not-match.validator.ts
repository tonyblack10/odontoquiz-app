import { AbstractControl } from '@angular/forms';

export function fieldsNotMatch(field: string, otherField: string) {
  return (control: AbstractControl) => {
    const input = control.get(field);
    const otherInput = control.get(otherField);

    if(!input || !otherInput) {
      return undefined;
    }

    if(input.value !== otherInput.value) {
      return { fieldsNotMatch: true };
    }

    return null;
  }
}