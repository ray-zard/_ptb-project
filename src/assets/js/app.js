$(document).ready(function () {

  $('#slickCon').slick({
    infinite: true,
    autoplay: true,
    speed: 300,
    arrows: false
  });

  $('button[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('#slickCon').slick('slickGoTo', slideno - 1);
    $('button[data-slide].active').removeClass('active');
    $(this).toggleClass('active');
  });

  $('#slickCon').on('setPosition', function() {
    var currentSlide = $(this).slick('slickCurrentSlide');
    $("button[data-slide]").removeClass("active");
    $("button[data-slide]:nth-child("+(currentSlide + 1)+")").addClass("active");
});

});