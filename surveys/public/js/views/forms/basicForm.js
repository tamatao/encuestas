define([
  'jquery',
  'lodash',
  'backbone',
  'views/forms/field',
  'text!templates/forms/basicForm.html',
  'libs/misc/jquery.validate.min',
  'libs/select2/select2.min'
], function($, _, Backbone, FieldView, formBasicTemplate){
  var DashboardPage = Backbone.View.extend({
    el: '.main',
    type:'basicForm',
    events: {
      'click button[type="submit"]': 'submit',
      'click button.btn-cancel': 'cancel'
    },
    render: function () {
      var self = this;
      $('body .container header h1').html('Form');
      self.$el.empty().append(self.renderForm());
    },
    renderForm: function() {
      var self = this, $form = $(_.template(formBasicTemplate)()), rules = {};
      for(var i=0; i<self.model.fields.length; i++) {
        rules[self.model.fields[i].name] = self.model.fields[i].rules;
        $form.find('.fields').append(self.createField(self.model.fields[i]));
      }
      $form.validate({rules:rules,  highlight: function(element, errorClass) {$(element).parent().removeClass('fadeIn').removeClass('bounce').addClass('bounce')}})
      return $form;
    },
    submit: function(){
      var self = this;
      self.$el.find('form').valid();
      return false;
    },
    cancel: function() {
      window.history.back();
    },
    createField: function(aField) {
      var aFieldView = new FieldView({field:aField, type:this.type});
      return aFieldView.render();
    }
  });
  return DashboardPage;
});
