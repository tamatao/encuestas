define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/verticalmenu/menu.html'
], function($, _, Backbone, headerMenuTemplate){
  var HeaderMenuView = Backbone.View.extend({
    el: '.cbp-vimenu',
    initialize: function () {
    },
    events: {
      'click a': 'clicked',
      'click a': 'highlightMenuItem'      
    },
    render: function () {
      $(this.el).html(headerMenuTemplate);
      $('a[href="' + window.location.hash + '"]').parent('li').addClass('cbp-vicurrent');
    },
    highlightMenuItem: function (ev) {
      this.$el.find('.cbp-vicurrent').removeClass('cbp-vicurrent');
      $(ev.currentTarget).parent('li').addClass('cbp-vicurrent');
    },
  })

  return HeaderMenuView;
});
