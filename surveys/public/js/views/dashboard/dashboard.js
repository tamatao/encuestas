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
      $(this.el).html('dashboard');
      require(["libs/widgets/widget.table"], function(){
        console.log('surveys table');
        var tSurveys = $('<div/>').table({
          btnNew: 'users/add',
          columns:[
            {name:'name', label:'Nombre'},
            {name:'description', label:'Descripcion'},
            {name:'url', label:'ver encuesta', type:'link'}
          ],
          url:null,
          data:[
            {name:'Primera encuesta', 'description':'Esta es una encuesta sobre videojuegos', 'url':'surveys/test/0'},
            {name:'Segunda encuesta', 'description':'Esta es una encuesta sobre animales favoritos', 'url':'surveys/test/0'},
            {name:'Tercera encuesta', 'description':'Esta es una encuesta sobre peliculas favoritos', 'url':'surveys/test/0'}
          ]
        });
        self.$el.empty().append(tSurveys);
      });
    }
  });
  return DashboardPage;
});
