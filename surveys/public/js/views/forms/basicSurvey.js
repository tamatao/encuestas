define([
  'views/forms/basicForm'
], function(BasicForm){
  var DashboardPage = BasicForm.extend({
    tagName: 'div',
    el:'',
    type:'basicSurvey',
    events: {
      'click button[type="submit"]': 'submit',
      'click button.btn-cancel': 'cancel'
    },
    render: function () {
      var self = this;
      self.$el.append(self.renderForm());
      return self.$el;
    },
    submit: function(){
      var self = this;
      self.$el.find('form').valid();
      return false;
    },
    cancel: function() {
      window.history.back();
    }
  });
  return DashboardPage;
});
