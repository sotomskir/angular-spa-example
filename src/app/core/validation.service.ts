import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ValidationService {

  defaultMessages = {
    'required':          '{control} is required.',
    'minlength':         '{control} must be at least {min} characters long.',
    'maxlength':         '{control} cannot be more than {max} characters long.',
    'email':             'Must be valid email address',
    'matchingPasswords': 'Passwords not match',
    'requiredTrue':      '{control} is required',
    'pattern':           '{control} does not match pattern',
    'nullValidator':     '{control} cannot be null',
  };

  public static matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey];
      const passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({matchingPasswords: true});
      }
    };
  }

  constructor() { }

  validate(registerForm: FormGroup, formErrors: any, validationMessages = null) {
    if (!registerForm) { return; }
    for (const field in formErrors) {
      // clear previous error message (if any)
      formErrors[field] = '';
      const control = registerForm.get(field);
      if (control && control.dirty && !control.valid) {
        for (const errorCode in control.errors) {
          formErrors[field] += this.getMessage(field, errorCode, control.getError(errorCode), validationMessages) + ' ';
        }
      }
    }
  }

  private getMessage(field: string, errorCode: string, error: any, validationMessages: any) {
    let rawMessage = this.getDefaultMessage(errorCode);
    if (validationMessages && validationMessages.hasOwnProperty(field) && validationMessages[field].hasOwnProperty(errorCode)) {
      rawMessage = validationMessages[field][errorCode];
    }
    const initCapsField = field.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
    let message = rawMessage.replace('{control}', initCapsField);
    if ('minlength' === errorCode) {
      message = message.replace('{min}', error.requiredLength);
    }

    return message;
  }

  private getDefaultMessage(errorCode: string) {
    const message = this.defaultMessages[errorCode];
    if (!message) {
      throw new Error('Default message not found for errorCode: ' + errorCode);
    }
    return message;
  }

}
