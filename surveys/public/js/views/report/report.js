define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/report/report.html',
  'libs/chartjs/Chart.min'
], function($, _, Backbone, Template){
  var ReportView = Backbone.View.extend({
    tagName: 'div',
    el:'',
    initialize: function() {
      
    },
    events: {
      
    },
    render: function() {
      var self = this;
      self.renderTitle();
      var data = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
          {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [65,59,90,81,56,55,40]
          },
          {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [28,48,40,19,96,27,100]
          }
        ]
      }
      self.$el.empty().append($(_.template(Template)({})));
      //Get context with jQuery - using jQuery's .get() method.
      var ctx = self.$el.find("#myChart").get(0).getContext("2d");
      //This will get the first returned node in the jQuery collection.
      var myNewChart = new Chart(ctx).Line(data,{});

      return self.$el;
    },
    renderTitle: function() {
      $('body .container header h1').html('Reporte');
    },
  });
  return ReportView;
});
