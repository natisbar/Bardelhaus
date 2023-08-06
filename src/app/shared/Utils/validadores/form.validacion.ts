import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function regularCharacterValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const stringValid = /[^A-Za-zá-úÁ-Ú\s\u00f1\u00d1]/.test(value);

        return stringValid ? {stringValid:true}: null;
    }
}


export function telephoneValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

      const value = control.value;

      if (!value) {
          return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);

      const hasLowerCase = /[a-z]+/.test(value);

      const hasNumeric = /[0-9]+/.test(value);

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

      return !passwordValid ? {passwordStrength:true}: null;
  }
}
