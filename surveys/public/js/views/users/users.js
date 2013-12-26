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
      require(["libs/widgets/widget.table"], function(){
        var tUsers = $('<div/>').table({
          btnNew: 'users/add',
          columns:[
            {name:'email', label:'eMail'},
            {name:'name', label:'Name'}
          ],
          url:null,
          data:[
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'},
            {email:'aramirez@bitam.com', 'name':'Antonio Ramirez'},
            {email:'rtorres@bitam.com', 'name':'Rigo Torres'}
          ]
        });
        self.$el.empty().append(tUsers);
      })
    }
  });
  return UsersPage;
});
