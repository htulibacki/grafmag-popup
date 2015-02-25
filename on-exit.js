$(function() {
    // uaktywanimy przycisk zamykający popup
    $('.window_content a.window_close').on('click', function(e) {
        e.preventDefault();

        $(this).parent().removeClass('opened');
        $('#window_overlay').removeClass('opened');
    });

    var popupShown = false,
        previousY = 0;

    $(document).on('mousemove', function(e) {
        if ((e.pageY - $(document).scrollTop()) <= 20 && previousY > e.pageY && !popupShown) {
            $('.window_content').addClass('opened');
            $('#window_overlay').addClass('opened');

            popupShown = true;
        }

        previousY = e.pageY;
    });
});