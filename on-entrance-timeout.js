$(function() {
    // uaktywanimy przycisk zamykający popup
    $('.window_content a.window_close').on('click', function(e) {
        e.preventDefault();

        $(this).parent().removeClass('opened');
        $('#window_overlay').removeClass('opened');
    });

    window.setTimeout(function() {
        $('.window_content').addClass('opened');
        $('#window_overlay').addClass('opened');
    }, 3000);
});