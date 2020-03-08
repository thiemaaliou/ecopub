

export const LocationsFields = [
  {
    'label': 'Référence',
    'type': 'text',
    'key': 'reference',
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
