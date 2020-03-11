export const FieldsPublicities = [
  {
    'label': 'Nom de la campagne',
    'type': 'text',
    'key': 'campaign_name',
    'order': 1,
    'required': true,
    'controlType': 'textbox',
  },
  {
    'label': 'Date de début ',
    'type': 'date',
    'key': 'date_start',
    'order': 2,
    'required': true,
    'controlType': 'datebox',
  },
  {
    'label': 'Date de fin ',
    'type': 'date',
    'key': 'date_end',
    'order': 3,
    'required': true,
    'controlType': 'datebox',
  },
  {
    'label': 'Client',
    'type': 'select',
    'key': 'clients_id',
    'url': 'clients',
    'method': 'GET',
    'order': 4,
    'required': true,
    'controlType': 'dropdown',
  },
  {
    'label': 'Images',
    'type': 'images',
    'key': 'referrer',
    'order': 5,
    'required': false,
    'controlType': 'image',
  }
]
