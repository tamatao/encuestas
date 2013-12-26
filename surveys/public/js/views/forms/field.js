define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/forms/field.html'
], function($, _, Backbone, FieldTemplate){
  var FieldView = Backbone.View.extend({
    render: function () {
      var self = this,
      aTemplate = _.template(FieldTemplate),
      aField = self.options.field,
      $el = $(aTemplate({name:aField.name, label:aField.label})),
      $input;

      switch(aField.type) {
        case 'text': 
          $input = $('<input/>', {type:'text'});
          break;
        case 'password': 
          $input = $('<input/>', {type:'password'});
          break;
        case 'single_choice':
          $input = $('<div/>');
          if(aField.answers) {
            for(var i=0; i<aField.answers.length; i++) {
              $input.append('<label class="radio-inline"><input type="radio" name='+aField.name+' value='+ aField.answers[i] +'>'+ aField.answers[i] +'</label>');
            }
            $input.append('<label for="'+ aField.name +'" class="error"></label>')
          }          
          break;
        case 'list':
          $input = $('<select/>', {});
          break;
        case 'header':
          return $input = $('<h4>'+ aField.label + '</h4>');
          break;
      }

      if(aField.type != 'single_choice') {
        $input.addClass('form-control')
        $input.attr('name', aField.name);
        $input.attr('placeholder', aField.label);  
      }
      
      $formControl = $el.find('.control').empty().append($input);

      self.$el = $el;
      
      return self.$el;
    }
    
  });
  return FieldView;
});
