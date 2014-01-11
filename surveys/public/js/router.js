// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
   'routefilter'
], function ($, _, Backbone, Vm) {
  var AppRouter = Backbone.Router.extend({
    history: [],
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
      'login':'login',
      'report':'report',
      // Default - catch all
      '*actions': 'defaultAction'
    },
    // Routes que necesitan autentificacion y si el usuario no esta autentificado lo mandamos a la pagina de login
    requresAuth : ['users', 'users/add', 'dashboard', 'configuration', 'survey/add'],
    // Routes que no son accesibles si el usuario esta autentificado
    preventAccessWhenAuth : ['#login'],
    before: function( route, params ) { 
      console.debug('before', route, params);
      //checamos si el usuario esta autentificado o no, despues revisamos si la ruta necesita autentificacion
      var isAuth = appView.isAuth();
      var path = Backbone.history.fragment;
      var needAuth = _.contains(this.requresAuth, path);
      var cancleAccess = _.contains(this.preventAccessWhenAuth, path);

      if(needAuth && !isAuth) {
        //Si el usuario entra a una pagina que requiere autentificacion lo mandamos a la pagina de login y guardamos el path para despues de logearse regrese a la pagina solicitada
        //Session.set('redirectFrom', path);
        console.debug('Rechazamos: ' + route)
        Backbone.history.navigate('login', { trigger : true });
        return false;
      } else if(isAuth && cancleAccess) {
        //El usuario esta autentificado e intenta entrar a pagina como login, entonces lo redireccionamos a la pagina home
        Backbone.history.navigate('', { trigger : true });
        return false;
      }
      //No hay ningun problema, le servimos la pagina que solicito
      console.debug('Servimos: ' + route)
      this.history.push({'route':route, 'params':params});
    },
    after: function( route, params ) { console.debug('after', route, params) },
    index: function() { console.debug('index') },
    page: function( route ) { console.debug('page', route) }
  });

  var initialize = function(options){
    var appView = options.appView;
    var router = new AppRouter(options);

    router.on('route:login', function() {
      require(['views/login/login'], function (LoginPage) {
        var loginPage = Vm.create(appView, 'LoginPage', LoginPage);
        $('body').empty().append(loginPage.render());
      });
    })

    router.on('route:report', function() {
      require(['views/report/report'], function(ReportView) {
        var reportView = Vm.create(appView, 'ReportView', ReportView);
        $('.main').append(reportView.render());
      })
    })

    router.on('route:users', function () {
      require(['views/users/users', 'models/user'], function (UsersPage, User) {
        var usersPage = Vm.create(appView, 'UsersPage', UsersPage, {collection: new Backbone.Collection([], {model: User})});
        usersPage.render();
      });
    });

    router.on('route:dashboard', function () {
      require(['views/dashboard/dashboard', 'models/survey'], function (DashboardPage, Survey) {
        var dashboardPage = Vm.create(appView, 'DashboardPage', DashboardPage, {collection: new Backbone.Collection([], {model: Survey})});
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
    });

    router.on('route:showSurvey', function(surveyName, id){
      console.log('Surveyname: ' + surveyName + ', id: ' + id);
      require(['views/survey/survey', 'models/survey'], function (SurveyPage, surveysModel) {
        var surveyPage = Vm.create(appView, 'SurveyPage', SurveyPage, {model: new surveysModel({id:id})});
        surveyPage.model.fetch({success: function(){
          surveyPage.render();
        }, error: function(){
          console.log('Error al obtener el modelo de la encuesta')
        }})
      });
    })

    Backbone.history.start({pushState: false, root: "/encuestas/surveys/public/"});
    $(document).on('click', 'a:not([data-bypass])', function (evt) {
      var href = $(this).attr('href');
      var protocol = this.protocol + '//';
      if (href && href.slice(protocol.length) !== protocol) {
        evt.preventDefault();
        console.debug('Naviate: ' + href)
        router.navigate(href, {trigger:true});
      }
    });
  };
  return {
    initialize: initialize
  };
});
