define([
  'lodash',
  'backbone'
], function(_, Backbone) {
  var usersModel = Backbone.Model.extend({
    fields: [
      {
        name: 'email',
        type: 'text',
        label: 'eMail',
        rules: {
          required: true
        }
      },
      {
        name: 'password',
        type: 'password',
        label: 'password',
        rules: {
          required: true
        }
      },
      {
        name: 'name',
        type: 'text',
        label: 'Nombre',
        rules: {
          required: true
        }
      },
      {
        name: 'puesto',
        type: 'list',
        label: 'Puesto',
        rules: {
          required: true
        }
      },
      {
        name: 'area',
        type: 'list',
        label: 'Area',
        rules: {
          required: true
        }
      },
      {
        name: 'type',
        type: 'list',
        label: 'Tipo',
        rules: {
          required: true
        }
      },
      {
        name: 'relationUserSurvey',
        type: 'collection'
      }
    ],
    /**
    * details, es la lista de los modelos detalle para la forma
    */
    details:[
      {
        'model':'relationUserSurvey',
        'view':'relationUserSurvey',
        'field':'relationUserSurvey',
        'foreign_key': {
          'id_user':'id'
        }
      }
    ],
    defaults: {
      email: null,
      password: null,
      name: null,
      puesto: null,
      area: null,
      type: null,
      cliente: null
    },
    initialize: function(){
    }

  });
  return usersModel;
});
