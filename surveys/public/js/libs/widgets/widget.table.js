require(['jquery', 'libs/finderSelect/jquery.finderSelect.min'], function($){
  console.log('table')
  $.widget("ui.table", {
    options: {
      url: null,
      checkbox: true,
      columns:[],
      pagination: {
        'total':0,
        'per_page':15,
        'current_page':1,
        'last_page':0,
        'from':0,
        'to':0
      }
    },  
  
    _create: function() {  
      var self = this;

      self.element.append(
          self._createControlsHeader(),
          self._createTable()
        );
      self._buildPage();
      self.tBody.finderSelect({enableDesktopCtrlDefault:true});
      self.tBody.finderSelect('addHook','highlight:before', function(el) {
        el.find('input').prop('checked', true);
        !el.length || self.controlsHeader.find('.btn-trash').show();
      });
      self.tBody.finderSelect('addHook','unHighlight:before', function(el) {
        el.find('input').prop('checked', false);
        if(self.tBody.find("input[type='checkbox']:checked").length==0) {
          self.tHead.find("input[type='checkbox']").prop('checked', false);
          self.controlsHeader.find('.btn-trash').hide();
        }
      });
      self.tBody.on("click", ":checkbox", function(e){
        e.preventDefault();
      });
      self.tHead.find("input[type='checkbox']").change(function () {
        if ($(this).is(':checked')) {
          self.tBody.finderSelect('highlightAll');
        } else {
          self.tBody.finderSelect('unHighlightAll');
        }
      });
    },

    _createControlsHeader: function() {
      var self = this, controls = $('<div/>', {'class':'controlsheader'}), btnNew, btnRemove, list = $('<ul/>');

      btnNew = $('<a/>', {'class': 'btn btn-primary btn-mini btn-new', href:self.options.btnNew}).html('New');
      btnRemove = $('<button/>', {'class': 'btn btn-primary btn-mini btn-trash'}).hide().html('Send Selected to Trash');
      list.append($('<li/>').append(btnNew));
      list.append($('<li/>').append(btnRemove));

      btnRemove.on('click', function(){self._removeAllSelected()});

      self.controlsHeader = controls.append(list);
      return controls;
    },

    _createTable: function() {
      this.tBody = this._createTableBody();
      return $('<table/>', {'class':'table table-condensed'}).append(this._createTableHeader(), this.tBody);
    },

    _createTableHeader: function() {
      var tHead = $('<thead/>'), columns = this.options.columns, myTR = $('<tr/>');
      if(this.options.checkbox) {
        myTR.append($('<th/>').append($('<input/>', {type:'checkbox'})));
      }
      for(var i=0; i<columns.length; i++) {
        myTR.append($('<th/>').html(columns[i].label));
      }
      this.tHead = tHead;
      return tHead.append(myTR);
    },

    _createTableBody: function() {
      return $('<tbody/>');
    },

    _buildPage: function() {
      var self = this;
      if(self.options.url) {
        $.ajax({url:self.options.url, data:{}}).then(function(res){

        }, function(res) {

        });
      } else if(self.options.data) {
        for(var i = 0; i<self.options.data.length; i++) {
          self._addRow(self.options.data[i]);
        }
      }
    },
  
    _addRow: function(row) {
      var self = this, myTR = $("<tr/>"), columns = self.options.columns, myTD;
      if(self.options.checkbox) {
        myTR.append('<td><input type="checkbox" /></th>');
      }
      for(var i = 0; i<columns.length; i++) {
        myTD = $('<td/>');
        switch(columns[i].type) {
          case 'link':
            myTD.html($('<a/>', {href:row[columns[i].name]}).html(columns[i].label)).addClass('safezone');
            break;
          default:
            myTD.html(row[columns[i].name]);
        }        
        myTR.append(myTD);
      }
      myTR.find(".safezone").on("mousedown", function(e){
            return false;
      });
      self.tBody.append(myTR);      
    },

    _removeAllSelected: function() {
      this.tBody.find("input[type='checkbox']:checked").parents('TR').remove();
      if(this.tBody.find("input[type='checkbox']").length == 0) {
        this.controlsHeader.find('.btn-trash').hide();
        this.tHead.find("input[type='checkbox']").prop('checked', false);
      }
    },
  
    myPublicFunction: function() {
    },
    destroy: function() {}  
  });
})