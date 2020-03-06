export class FieldModelBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      type?: string
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
  }
}

export const FieldsOrganization = [
  {
    'label': 'Nom',
    'type': 'text',
    'key': 'name',
    'order': 1,
    'required': true,
    'controlType': 'textbox',
  },
  {
    'label': 'Adresse ',
    'type': 'text',
    'key': 'address',
    'order': 2,
    'required': true,
    'controlType': 'textbox',
  },
  {
    'label': 'Email ',
    'type': 'text',
    'key': 'email',
    'order': 3,
    'required': true,
    'controlType': 'textbox',
  },
  {
    'label': 'Téléphone ',
    'type': 'number',
    'key': 'phone',
    'order': 3,
    'required': true,
    'controlType': 'textbox',
  },
  {
    'label': 'Type d\'organisation',
    'type': 'select',
    'key': 'organization_type_id',
    'url': 'organization_type',
    'method': 'GET',
    'order': 4,
    'required': true,
    'controlType': 'dropdown',
  },
  {
    'label': 'Logo ',
    'type': 'image',
    'key': 'logo',
    'order': 5,
    'required': false,
    'controlType': 'logo',
  }
]
