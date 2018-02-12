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
            nextArrow: '<i class="slick-next fa fa-angle-right fa-3x"> </i>'
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
            autoplay: true,
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
            nextArrow: '<i class="slick-next slick-next_main-factors fa fa-angle-right fa-3x"> </i>'
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

    });
})(jQuery);
