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
      self.collection.url = 'users'
      self.collection.fetch({        
        success: function() {
          require(["libs/widgets/widget.table"], function(){
            var tUsers = $('<div/>').table({
              btnNew: 'users/add',
              columns:[
                {name:'email', label:'eMail'},
                {name:'name', label:'Name'}
              ],
              url:null,
              collecion:self.collection
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
