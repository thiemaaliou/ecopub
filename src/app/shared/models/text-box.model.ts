import { FieldModelBase } from './organization-fields';

export class TextboxModel extends FieldModelBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
