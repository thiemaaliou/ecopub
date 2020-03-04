import { Injectable }       from '@angular/core';

import { of } from 'rxjs';
import { FieldModelBase } from '../shared/models/organization-fields';
import { DropdownModel } from '../shared/models/dropdown.model';
import { TextboxModel } from '../shared/models/text-box.model';

@Injectable()
export class PopulateFormGroupService {

  // TODO: get from a remote source of question metadata
  getFormFields(data: Array<any>) {
    let fields: FieldModelBase<string>[] = [];
      for(let d of data){
        if(d.type == 'select'){
          fields.push(
                      new DropdownModel({
                          key: d.key,
                          label: d.label,
                          options: [],
                          order: d.order,
                          required: d.required
                        })
                      );
          }else{
            let text = new TextboxModel({
                            key: d.key,
                            label: d.label,
                            options: [],
                            order: d.order,
                            required: d.required
                          });
            fields.push(text);
    }

 }
    return of(fields.sort((a, b) => a.order - b.order));
  }
}
