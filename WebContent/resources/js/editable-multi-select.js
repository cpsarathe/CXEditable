/**
This multiselect drop down extends select dropdown and adds extra attribute multiple="true"
which makes it multiselectable. Also after submit it displays selected records.

@class multiselect
@extends select
@final
@example
<span href="#" id="status" data-type="multiselect" data-pk="1" data-url="/post" data-title="Select status"></span>
<script>
$(function(){
    $('#status').editable({
        value: [1,2],    
        source: [
              {value: 1, text: 'Active'},
              {value: 2, text: 'Blocked'},
              {value: 3, text: 'Deleted'}
           ]
    });
});
</script>
@added by cp
**/
(function($) {
  var multiSelect = function (options) {
    this.init('multiselect', options, multiSelect.defaults);
  };
  $.fn.editableutils.inherit(multiSelect, $.fn.editabletypes.select);

  $.extend(multiSelect.prototype, {
    value2htmlFinal: function(value, element) {
    	console.log('value',value);
    	console.log('this.sourceData',element);
        var text = '', 
            items = $.fn.editableutils.itemsByValue(value, this.sourceData);
            
        if(items.length) {
        	for(var i=0;i<items.length;i++){
        		text = text + '<p>' + items[i].text + '</p>';	
        	}
            
        }
        $.fn.editabletypes.abstractinput.prototype.value2html.call(this, text, element);
    }
  });
  multiSelect.defaults = $.extend({}, $.fn.editabletypes.select.defaults, {
      /**
      @property tpl 
      @default <select></select>
      **/         
      tpl:'<select multiple="true" class="multi-select-box"></select>'
  });

  $.fn.editabletypes.multiselect = multiSelect;  

}(window.jQuery));