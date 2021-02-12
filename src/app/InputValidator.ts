import {AbstractControl,ValidatorFn} from '@angular/forms';

export class InputValidator {
    static OnlySeparatedNumbersAllowed():ValidatorFn{
        return (control:AbstractControl):{[key:string]:any}| null =>{
         const isSpaceSeparated = (/^[-?0-9\s]*$/).test(control.value);
         return isSpaceSeparated?null:{forbiddenName:{value:control.value}};
        };
    }
}