define([
  'lodash',
  'backbone'
], function(_, Backbone) {
  var surveysModel = Backbone.Model.extend({
    name: 'Survey',
    urlRoot: 'survey',
    /*events: {
      'change:type': {
        'show': {
          'Configurar escala': ['answers']
        }
      }
    },*/
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
        type: 'textarea',
        label: 'Descripcion',
        rules: {
          required: true
        }
      },
      /*{
        name: 'type',
        type: 'single_choice',
        label: 'Tipo',
        rules: {
          required: true
        },
        answers:[{value:'1', text:'Escala de valoración'}, {value:'2', text:'Configurar escala'}],
        defaultValue: 'Escala de valoración'
      },*/
      {
        name: 'active',
        type: 'single_choice',
        label: 'Activo',
        rules: {
          required: true
        },
        answers:[{value:'0', text:'No'}, {value:'2', text:'Si'}],
        defaultValue: 'No'
      },
      {
        name: 'instructions',
        type: 'textarea',
        label: 'Instrucciones',
        rules: {
          required: true
        }
      },
      {
        name: 'comments',
        type: 'single_choice',
        label: 'Comentarios',
        rules: {
          required: true
        },
        answers:[{value:'0', text:'No'}, {value:'2', text:'Si'}],
        defaultValue: 'No'
      },
      {
        name: 'fields',
        type: 'collection'
      }
    ],
    /**
    * details, es la lista de los modelos detalle para la forma
    */
    details:[
      {
        'model':'field',
        'view':'field',
        'field':'fields',
        'foreign_key': {
          'id_survey':'id'
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
