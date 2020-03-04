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
    'required': true
  },
  {
    'label': 'Adresse ',
    'type': 'text',
    'key': 'address',
    'required': true
  },
  {
    'label': 'Email ',
    'type': 'text',
    'key': 'email',
    'required': true
  },
  {
    'label': 'Téléphone ',
    'type': 'number',
    'key': 'phone',
    'required': true
  },
  {
    'label': 'Type d\'organisation',
    'type': 'select',
    'key': 'organization_type_id',
    'url': 'organization_type',
    'method': 'GET',
    'required': true
  },
  {
    'label': 'Logo ',
    'type': 'image',
    'key': 'logo',
    'required': true
  }
]
