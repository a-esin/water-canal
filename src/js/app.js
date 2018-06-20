;$(document).foundation();

(function ($) {
    "use strict";
    $(function () {

        /**
         * Разные карусели
         */
        $(".x-carousel-main").slick({
            infinite: true,
            dots: true,
            arrows: true,
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            autoplayHoverPause: true,
            fade: true,
            swipeToSlide: true,
            prevArrow: '<i class="slick-prev fa fa-angle-left fa-3x"> </i>',
            nextArrow: '<i class="slick-next fa fa-angle-right fa-3x"> </i>',
            responsive: [
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                }
            }
            ]
        });


        $(".x-carousel-events").slick({
            infinite: true,
            dots: true,
            arrows: false,
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            swipeToSlide: true,
            autoplay: false,
            autoplaySpeed: 7000,
            autoplayHoverPause: true
        });

        $(".x-carousel-video").slick({
            infinite: true,
            dots: true,
            arrows: false,
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 7000,
            autoplayHoverPause: true
        });

        $(".x-main-factors").slick({
            infinite: true,
            dots: false,
            arrows: true,
            slidesPerRow: 1,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            autoplayHoverPause: true,
            fade: false,
            swipeToSlide: true,
            prevArrow: '<i class="slick-prev slick-prev_main-factors fa fa-angle-left fa-3x"> </i>',
            nextArrow: '<i class="slick-next slick-next_main-factors fa fa-angle-right fa-3x"> </i>',
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1                
              }
            }
          ]
        });


        $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          fade: true,
          asNavFor: '.slider-nav',
          prevArrow: '<i class="slick-prev slick-prev_for fa fa-angle-left fa-3x"> </i>',
          nextArrow: '<i class="slick-next slick-next_for fa fa-angle-right fa-3x"> </i>',
          dots: false
        });
        
        $('.slider-nav').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          dots: true,
          centerMode: true,
          focusOnSelect: true,
          arrows: true,
          prevArrow: '<i class="slick-prev slick-prev_nav fa fa-angle-left fa-3x"> </i>',
          nextArrow: '<i class="slick-next slick-next_nav fa fa-angle-right fa-3x"> </i>',
          infinite: true,
          autoplay: true,
          dots: false
        });


        $('.slider-for-modal').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          fade: true,
          asNavFor: '.slider-nav-modal',
          prevArrow: '<i class="slick-prev slick-prev_for-modal fa fa-angle-left fa-5x"> </i>',
          nextArrow: '<i class="slick-next slick-next_for-modal fa fa-angle-right fa-5x"> </i>',
          dots: false,
          autoplay: false
        });
        
        $('.slider-nav-modal').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.slider-for-modal',
          dots: true,
          centerMode: true,
          focusOnSelect: true,
          arrows: true,
          prevArrow: '<i class="slick-prev slick-prev_nav-modal fa fa-angle-left fa-3x"> </i>',
          nextArrow: '<i class="slick-next slick-next_nav-modal fa fa-angle-right fa-3x"> </i>',
          infinite: true,
          autoplay: false,
          dots: false
        });


        $('.js-gallery').click(function() {
          $('.slider-for-modal').slick('slickNext');
        });

       

        /**
         * Показ любого блока по наведению на другой
         */
        var toggleLeaveTimer;
        $('[data-toggle-hover-dd]').on('mouseenter mouseleave', function(e) {
            var selector = '#' + $(this).data('toggle-hover-dd');
            if ($(selector).length > 0)
            {
                var $toggler = $(selector);
                var className = $toggler.data('toggler-hover-dd');
                if (e.type == 'mouseenter' && !$toggler.hasClass(className))
                {
                    $toggler.addClass(className)
                }
                if (e.type == 'mouseleave' && $toggler.hasClass(className))
                {
                    toggleLeaveTimer = setTimeout(function () {$toggler.removeClass(className)}, 300);
                }
            }
        });
        $('[data-toggler-hover-dd]').on('mouseenter', function () {
            clearTimeout(toggleLeaveTimer);
        }).on('mouseleave', function () {
            var $toggler = $(this);
            var className = $toggler.data('toggler-hover-dd');
            if ($toggler.hasClass(className))
            {
                toggleLeaveTimer = setTimeout(function () {$toggler.removeClass(className)}, 300);
            }
        });

        $(".x-carousel-events").find(".slick-dots")
            .addClass("slick-dots_events");

        $(".x-carousel-main").find(".slick-dots")
            .addClass("show-for-medium");

        $(".region-news").find(".slick-dots")
            .addClass("slick-dots_events_margin");

        // Кнопка "наверх"

        

        $('.button-up').click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, 1200);
            return false;
        });

        // Выпадающее меню
        $('.menu-mobile__close').click(function () {
            $('.menu-mobile').addClass('hide');
        });

        $(window).scroll(function () {
        // Если отступ сверху больше 800px то показываем кнопку "Наверх"
          if ($(this).scrollTop() > 500) {
              $('.button-up').css('display', 'block');
          } else {
              $('.button-up').css('display', 'none');
          }
        });

        $('.left-menu__link_selected').click(function() {
            $('.left-menu__dropdown').toggleClass('hide');
            $('.left-menu__arrow').toggleClass('left-menu__arrow_active');
        });


        // Календарь

        $(function(){
            $("#datepicker").datepicker({
                dateFormat: "dd.mm.y",
                monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
                firstDay: 1
            });
        });

        $(function(){
            $("#datepicker-2").datepicker({
                dateFormat: "dd.mm.y",
                monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
                firstDay: 1
            });
        });

        // Маска ввода номера телефона
        $("#phone").mask("+7 (999) 999-99-99");


        // Карта

        $('.background-map__city_1').click(function() {
          $('.background-map__city_1').toggleClass('background-map__city_active');
          $('.background-map__city_2').removeClass('background-map__city_active');
          $('.background-map__city_3').removeClass('background-map__city_active');
          $('.background-map__city_4').removeClass('background-map__city_active');
          $('.background-map__city_5').removeClass('background-map__city_active');
          $('.background-map__city_6').removeClass('background-map__city_active');
          $('.background-map__city_7').removeClass('background-map__city_active');
        });

        $('.background-map__city_2').click(function() {
          $('.background-map__city_2').toggleClass('background-map__city_active');
          $('.background-map__city_1').removeClass('background-map__city_active');
          $('.background-map__city_3').removeClass('background-map__city_active');
          $('.background-map__city_4').removeClass('background-map__city_active');
          $('.background-map__city_5').removeClass('background-map__city_active');
          $('.background-map__city_6').removeClass('background-map__city_active');
          $('.background-map__city_7').removeClass('background-map__city_active');
        });

        $('.background-map__city_3').click(function() {
          $('.background-map__city_3').toggleClass('background-map__city_active');
          $('.background-map__city_1').removeClass('background-map__city_active');
          $('.background-map__city_2').removeClass('background-map__city_active');
          $('.background-map__city_4').removeClass('background-map__city_active');
          $('.background-map__city_5').removeClass('background-map__city_active');
          $('.background-map__city_6').removeClass('background-map__city_active');
          $('.background-map__city_7').removeClass('background-map__city_active');
        });

        $('.background-map__city_4').click(function() {
          $('.background-map__city_4').toggleClass('background-map__city_active');
          $('.background-map__city_1').removeClass('background-map__city_active');
          $('.background-map__city_2').removeClass('background-map__city_active');
          $('.background-map__city_3').removeClass('background-map__city_active');
          $('.background-map__city_5').removeClass('background-map__city_active');
          $('.background-map__city_6').removeClass('background-map__city_active');
          $('.background-map__city_7').removeClass('background-map__city_active');
        });

        $('.background-map__city_5').click(function() {
          $('.background-map__city_5').toggleClass('background-map__city_active');
          $('.background-map__city_1').removeClass('background-map__city_active');
          $('.background-map__city_2').removeClass('background-map__city_active');
          $('.background-map__city_3').removeClass('background-map__city_active');
          $('.background-map__city_4').removeClass('background-map__city_active');
          $('.background-map__city_6').removeClass('background-map__city_active');
          $('.background-map__city_7').removeClass('background-map__city_active');
        });

        $('.background-map__city_6').click(function() {
          $('.background-map__city_6').toggleClass('background-map__city_active');
          $('.background-map__city_1').removeClass('background-map__city_active');
          $('.background-map__city_2').removeClass('background-map__city_active');
          $('.background-map__city_3').removeClass('background-map__city_active');
          $('.background-map__city_4').removeClass('background-map__city_active');
          $('.background-map__city_5').removeClass('background-map__city_active');
          $('.background-map__city_7').removeClass('background-map__city_active');
        });

        $('.background-map__city_7').click(function() {
          $('.background-map__city_7').toggleClass('background-map__city_active');
          $('.background-map__city_1').removeClass('background-map__city_active');
          $('.background-map__city_2').removeClass('background-map__city_active');
          $('.background-map__city_3').removeClass('background-map__city_active');
          $('.background-map__city_4').removeClass('background-map__city_active');
          $('.background-map__city_5').removeClass('background-map__city_active');
          $('.background-map__city_6').removeClass('background-map__city_active');
        });


        // Чекбокс согласия на обработку персональных данных

        $('#subscribe').prop('disabled', true);

        $('#agree').change(function() {

            $('#subscribe').prop('disabled', function(i, val) {
              return !val;
            })
        });




        $('.menu-burger').click(function() {
          $('.overlay').removeClass('hide');
        });

        $('.menu-mobile__close').click(function() {
          $('.overlay').addClass('hide');
        });

    });
})(jQuery);
