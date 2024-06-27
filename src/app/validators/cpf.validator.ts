import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { validate_cpf } from 'js-brasil/src/validate';

export function createCPFValidator() : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value

        if(!value) {
            return null
        }
        const isCpf = validate_cpf(value)
        return isCpf ? null : {cpfError: true}
    }
 }