$(document).ready(function () {

  $('#slickCon').slick({
    arrows: false
  });

  $('button[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('#slickCon').slick('slickGoTo', slideno - 1);
  });

});