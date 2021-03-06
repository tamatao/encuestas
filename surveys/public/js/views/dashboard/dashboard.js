define([
  'jquery',
  'lodash',
  'backbone'/*,
  'text!templates/dashboard/page.html'*/
], function($, _, Backbone, dashboardPageTemplate){
  var DashboardPage = Backbone.View.extend({
    el: '.main',
    render: function () {
      var self = this;
      $('body .container header h1').html('Dashboard');
      self.collection.url = 'survey'
      self.collection.fetch({
        success: function() {
          require(["libs/widgets/widget.table"], function(){
            console.log('surveys table');
            var tSurveys = $('<div/>').table({
              btnNew: 'survey/add',
              columns:[
                {name:'name', label:'Nombre'},
                {name:'description', label:'Descripcion'},
                {name:'url', label:'ver encuesta', type:'link'}
              ],
              url:null,
              collection:self.collection
            });
            self.$el.empty().append(tSurveys);
          });
        },
        error: function() {
          console.log('No se pudo cargar la collecion Survey');
        }
      });
    }
  });
  return DashboardPage;
});
