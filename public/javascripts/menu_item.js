$(document).ready(function(){
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
        $('header').scrollView();
    });
    
    $('.menu_toggle_black').click(function(){
        $('.main_header').addClass('mobile_menu_open');
        $('.menu_close').show();
        $(this).hide();
    });
    
    $('.menu_close').click(function(){
        $('.main_header').removeClass('mobile_menu_open');
        $(this).hide();
        $('.menu_toggle_black').show();
    });

});