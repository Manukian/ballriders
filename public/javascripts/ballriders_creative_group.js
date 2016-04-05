$(document).ready(function() {
    $.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
          scrollTop: $(this).offset().top
        }, 1000);
    });
}

$('.arrow_down').children('img').click(function(){
    $('.projects').scrollView();
});
$('.arrow_up').children('img').click(function(){
    $('.menu_wrapper').scrollView();
});
});