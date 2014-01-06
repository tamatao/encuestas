define([
  'lodash',
  'backbone'
], function(_, Backbone) {
  var RelationUserSurveyModel = Backbone.Model.extend({
    name: 'RelationUserSurveyModel',
    label: 'Relacion usuarios / encuesta',
    fields: [
      {
        name: 'username',
        type: 'list',
        label: 'Usuario a encuestar',
        rules: {
          required: true
        }
      },
      {
        name: 'survey',
        type: 'list',
        label: 'Encuesta',
        rules: {
          required: true
        }
      },
      {
        name: 'id_user',
        type: 'hidden',
        label: 'id_user',
        rules: {
          required: true
        }
      }
    ],
    views: {
      'relationUserSurvey':{
        'name':'relationUserSurvey',
        'columns':[
          {name:'username', label:'Usuario a encuestar'},
          {name:'survey', label:'Encuesta seleccionada'}
        ],
        'type':'inline'
      }
    },
    defaults: {
      username: '',
      survey: ''
    },
    parents: [
      {
        'model':'user',
        'foreign_key': {
          'id':'id_user'
        }
      }
    ],
    initialize: function(){
    }

  });
  return RelationUserSurveyModel;
});
