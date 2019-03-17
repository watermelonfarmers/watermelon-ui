import { FormGroup } from '@angular/forms';

export function MatchValidator(controlone: string, controltwo: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlone];
        const matchingControl = formGroup.controls[controltwo];

        if (matchingControl.errors && !matchingControl.errors.mustmatch) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustmatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}