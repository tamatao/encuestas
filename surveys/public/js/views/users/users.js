define([
  'jquery',
  'lodash',
  'backbone'/*,
  'text!templates/optimize/page.html'*/
], function($, _, Backbone, optimizePageTemplate){
  var UsersPage = Backbone.View.extend({
    el: '.main',
    initialize: function(){
      
    },
    render: function () {
      var self = this;
      $('body .container header h1').html('Users');
      self.collection.fetch({        
        success: function() {
          var data = [];
          self.collection.forEach(function(aModel, i){
            data.push({email:aModel.get('email'), name:aModel.get('name')});
          })
          require(["libs/widgets/widget.table"], function(){
            var tUsers = $('<div/>').table({
              btnNew: 'users/add',
              columns:[
                {name:'email', label:'eMail'},
                {name:'name', label:'Name'}
              ],
              url:null,
              data:data
            });
            self.$el.empty().append(tUsers);
          })
        },
        error: function() {
          console.log('No se pudo cargar la collecion Users');
        }
      })
    }
  });
  return UsersPage;
});
