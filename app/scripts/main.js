console.log('\'Allo \'Allo!');

(function($) { 'use strict';

  var $segmentControl = $('.im-button-group--segment-control');

  $segmentControl.on('click', '.im-button', function() {
    var $this = $(this);
    $this.addClass('is-active');
    $this.siblings().removeClass('is-active');
  });


})(jQuery);