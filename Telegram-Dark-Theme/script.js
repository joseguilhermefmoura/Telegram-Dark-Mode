// on hover, change another element using jquery
$(function() {
  $('.im_dialogs_col_wrap').hover(function() {
    $('.nano-slider').css('left', '-5px');
  }, function() {
    // on mouseout, reset the background colour
    $('.nano-slider').css('left', 'initial');
  });
});
// *************** ~~