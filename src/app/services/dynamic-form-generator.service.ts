import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldModelBase } from '../shared/models/organization-fields';


@Injectable()
export class FormGeneratorService {
  constructor() { }

  toFormGroup(fields: FieldModelBase<string>[] ) {
    let group: any = {};

    fields.forEach(field => {
      group[field.key] = field.required ? new FormControl(field.value || '', Validators.required) : new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }
}
