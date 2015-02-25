$(window).load(function() {
    // uaktywanimy przycisk zamykający popup
    $('.window_content a.window_close').on('click', function(e) {
        e.preventDefault();

        $(this).parent().removeClass('opened');
        $('#window_overlay').removeClass('opened');
    });

    var popupShown = false;

    $(window).on('scroll', function() {
        var scrollPercent = Math.round(($(window).scrollTop() + $(window).height()) * 100 / $(document).height());

        if (scrollPercent > 50 && !popupShown) {
            $('.window_content').addClass('opened');
            $('#window_overlay').addClass('opened');

            popupShown = true;
        }
    });
});