$(window).load(function() {
    // uaktywanimy przycisk zamykający popup
    $('.window_content a.window_close').on('click', function(e) {
        e.preventDefault();

        $(this).parent().removeClass('opened');
        $('#window_overlay').removeClass('opened');
    });

    var popupShown = false;

    $(window).on('scroll', function() {
        var scrollElementPosition = $('.blog-post:eq(1)').offset().top;

        if ($(window).scrollTop() + $(window).height() > scrollElementPosition && !popupShown) {
            $('.window_content').addClass('opened');
            $('#window_overlay').addClass('opened');

            popupShown = true;
        }
    });
});