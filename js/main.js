!(function ($) {
    "use strict";


    // Preloader
    $(window).on('load', function () {
        if ($('.load').length) {
            $('.load').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });




})(jQuery);