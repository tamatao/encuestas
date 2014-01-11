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
      aValue = self.options.value || aField.defaultValue,
      $el = $(aTemplate({name:aField.name, label:aField.label})),
      $input;

      switch(aField.type) {
        case 'numeric': 
          $input = $('<input/>', {type:'numeric'});
          break;
        case 'text': 
          $input = $('<input/>', {type:'text'});
          break;
        case 'textarea':
          $input = $('<textarea/>');
          break;
        case 'password': 
          $input = $('<input/>', {type:'password'});
          break;
        case 'single_choice':
          $input = $('<div/>');
          if(aField.answers) {
            for(var i=0; i<aField.answers.length; i++) {
              if($.isPlainObject(aField.answers[i])) {
                var text = aField.answers[i].text, value = aField.answers[i].value;
              } else {
                var text = aField.answers[i], value = aField.answers[i];
              }
              $input.append('<label class="radio-inline"><input data-description="'+ text +'" type="radio" name='+aField.name+' value='+ value +'>'+ text +'</label>');
            }
            $input.append('<label for="'+ aField.name +'" class="error"></label>')
          }          
          break;
        case 'list':
          $input = $('<input/>', {type:'hidden'})
          break;
        case 'header':
          return $input = $('<h4>'+ aField.label + '</h4>');
          break;
        case 'hidden':
          $input = $('<input/>', {type:'hidden'});
          break;
      }

      if(aField.type != 'single_choice') {
        $input.addClass('form-control')
        $input.attr('name', aField.name);
        $input.attr('placeholder', aField.label);  
      }
      
      $formControl = $el.find('.control').empty().append($input, $('<span/>', {'class':'help-block'}).html((aField.helpText ? aField.helpText : '')));
      $el.attr('data-fieldgroup', aField.name);
      self.$el = $el;

      //mejoramos los componentes
      switch(aField.type) {
        case 'list':
          $formControl.find('input').select2({query: function(query){
            $.ajax(aField.catalog.url, {
              timeout:180000
            }).then(function(response) {
              var data = {results: []};
              $.each(response, function(i, item) {
                if(query.term.length == 0 || this.text.toUpperCase().indexOf(query.term.toUpperCase()) >= 0 ){
                  data.results.push({id: item[aField.catalog.id], text: item[aField.catalog.text] });
                }
              });     
              query.callback(data);             
            })
          }});
          break;
      }

      if(aField.type == 'hidden') {
        self.$el.hide();
      }

      !aValue || $input.value(aValue);
      
      return self.$el;
    }
    
  });
  return FieldView;
});
