// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'vm'
], function ($, _, Backbone, Vm) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages admin
      'users': 'users',
      'dashboard': 'dashboard',
      'configuration': 'configuration',
      'users/add': 'form',
      'survey/add': 'form',
      'manager': 'manager',
      //pages surveys
      'surveys/:name/:id': 'showSurvey',
      // Default - catch all
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(options){
    var appView = options.appView;
    var router = new AppRouter(options);

    router.on('route:users', function () {
      require(['views/users/users'], function (UsersPage) {
        var usersPage = Vm.create(appView, 'UsersPage', UsersPage);
        usersPage.render();
      });
    });

    router.on('route:dashboard', function () {
      require(['views/dashboard/dashboard'], function (DashboardPage) {
        var dashboardPage = Vm.create(appView, 'DashboardPage', DashboardPage);
        dashboardPage.render();
      });
    });

    router.on('route:configuration', function () {
      require(['views/configuration/configuration'], function (ConfigurationPage) {
        var configurationPage = Vm.create(appView, 'ConfigurationPage', ConfigurationPage);
        configurationPage.render();
      });
    });

    router.on('route:form', function() {
      var sModel = null;
      switch(Backbone.history.fragment) {
        case 'users/add': sModel = 'user'; break;
        case 'survey/add': sModel = 'survey'; break;
      }
      if(sModel == '') {
        //modelo invalido
        debugger;
      }
      require(['views/forms/basicForm', 'models/'+sModel], function(BasicFormPage, Model) {
        var basicFormPage = Vm.create(appView, 'BasicFormPage', BasicFormPage, {model: new Model()});
        $('.main').empty().append(basicFormPage.render());
      })
    })

    router.on('route:showSurvey', function(surveyName, id){
      console.log('Surveyname: ' + surveyName + ', id: ' + id);
      require(['views/survey/survey', 'models/survey'], function (SurveyPage, surveysModel) {
        var surveyPage = Vm.create(appView, 'SurveyPage', SurveyPage, {model: new surveysModel({id:id})});
        surveyPage.render();
      });
    })

    Backbone.history.start({pushState: false, root: "/eBavel/"});
    $(document).on('click', 'a:not([data-bypass])', function (evt) {
      var href = $(this).attr('href');
      var protocol = this.protocol + '//';
      if (href && href.slice(protocol.length) !== protocol) {
        evt.preventDefault();
        router.navigate(href, {trigger:true});
      }
    });
  };
  return {
    initialize: initialize
  };
});
