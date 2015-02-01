
(function($) {

  $('#slider').nivoSlider({
    effect:'sliceDown', //Specify sets like: 'fold,fade,sliceDown'
    slices:15,
    animSpeed:500, //Slide transition speed
    pauseTime:10000,
    startSlide:0, //Set starting Slide (0 index)
    directionNav:false, //Next & Prev
    directionNavHide:false, //Only show on hover
    controlNav:true, //1,2,3...
    keyboardNav:true, //Use left & right arrows
    pauseOnHover:true, //Stop animation while hovering
    manualAdvance:false, //Force manual transitions
    captionOpacity:0.8, //Universal caption opacity
    beforeChange: function(){},
    afterChange: function(){},
    slideshowEnd: function(){} //Triggers after all slides have been shown
  });
  $(".nivo-controlNav a").prepend("<i class='thumb-wrapper'></i>");

  $('.gallery').fancybox();
})(jQuery);