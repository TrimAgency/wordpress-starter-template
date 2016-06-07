
jQuery(document).ready(function(){
  'use strict';
  var scrollCheck = function() {
                                  var scrollHeight = jQuery(document).scrollTop();

                                  if (scrollHeight > 900) {
                                    jQuery('.sliding-panel-content').css('background', 'transparent');
                                  } else {
                                    jQuery('.sliding-panel-content').css('background', '#404040');
                                  }

                              };

  jQuery('.hamburger').on('click', function(e) {
    jQuery('.hamburger').toggleClass('is-active');
  });

  jQuery('.sliding-panel-button').on('click touchstart',function (e) {
    var slidingPanel = jQuery('.sliding-panel-content,.sliding-panel-fade-screen');

    jQuery('.sliding-panel-content').css('background', '#404040');
    slidingPanel.toggleClass('is-visible');
    if(!slidingPanel.hasClass('is-visible')){
      scrollCheck();
    }
    console.log('ive been clicked!');
    e.preventDefault();
  });

  jQuery(document).scroll(function(){
    scrollCheck();
  });

});
