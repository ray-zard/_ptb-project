$(document).ready(function () {

  $('#slickCon').slick({
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
    arrows: false,
    swipe: false
  });

  // Остановка карусели при на вделении на кнопку

  $('button[data-slide]').hover(
    function() {
      $('#slickCon').slick('slickPause');
    }, function() {
      $('#slickCon').slick('slickPlay');
    }
  );

  // Привязка номера кнопки к слайду 

  $('button[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('#slickCon').slick('slickGoTo', slideno - 1);
    $('button[data-slide].active').removeClass('active');
    $(this).toggleClass('active');
  });

  // Определение слайда и добавление класса `.active` к кнопке

  $('#slickCon').on('setPosition', function() {
    var currentSlide = $(this).slick('slickCurrentSlide');
    $("button[data-slide]").removeClass("active");
    $("button[data-slide]:nth-child("+(currentSlide + 1)+")").addClass("active");
  });

  $('#clients').ready(function() {

    $('.logo-line').children().each(function(index) {

      let objectPosition = 0;

      for (let i = 0; i <= index; i++) {
        $(this).css('object-position', (objectPosition + 'px'));
        objectPosition -= 192;
      };

    });

    // console.log();

    $('.logo-line').slick({
      arrows: false,
      autoplay: true,
      speed: 1250,
      autoplaySpeed: 1000,
      infinite: true,
      centerMode: true,
      slidesToShow: 5,
      variableWidth: true,
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false,
    });

});

});