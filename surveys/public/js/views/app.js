define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'events',
  'text!templates/layout.html'
], function($, _, Backbone, Vm, Events, layoutTemplate){
  var AppView = Backbone.View.extend({
    el: 'body',
    initialize: function () {

    },
    render: function () {
      var that = this;
      $(this.el).html(layoutTemplate);
      require(['views/header/menu'], function (HeaderMenuView) {
        var headerMenuView = Vm.create(that, 'HeaderMenuView', HeaderMenuView);
        headerMenuView.render();
      });
      require(['views/verticalmenu/menu'], function (HeaderVerticalMenuView) {
        var headerVerticalMenuView = Vm.create(that, 'HeaderVerticalMenuView', HeaderVerticalMenuView);
        headerVerticalMenuView.render();
      });    
    }
  });
  return AppView;
});
