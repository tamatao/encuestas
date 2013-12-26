define([
  'lodash',
  'backbone'
], function(_, Backbone) {
  var surveysModel = Backbone.Model.extend({
    fields: [
      {
        name: 'name',
        type: 'text',
        label: 'Nombre',
        rules: {
          required: true
        }
      },
      {
        name: 'description',
        type: 'text',
        label: 'Descripcion',
        rules: {
          required: true
        }
      },
      {
        name: 'active',
        type: 'list',
        label: 'Activo',
        rules: {
          required: true
        }
      },
      {
        name: 'instructions',
        type: 'text',
        label: 'Instrucciones',
        rules: {
          required: true
        }
      },
      {
        name: 'comments',
        type: 'text',
        label: 'Comentarios',
        rules: {
          required: true
        }
      }
    ],
    defaults: {
      name: '',
      description: '',
      active: false,
      instructions: '',
      comments: ''
    },
    initialize: function(){
    }

  });
  return surveysModel;
});
