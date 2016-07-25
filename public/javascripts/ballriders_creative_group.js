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
        $('header').scrollView();
    });
    
    $('.menu_toggle_black').click(function(){
        $('.mobile_menu').css('opacity','1');
        $('.menu_close').show();
        $(this).hide();
    });
    
    $('.menu_close').click(function(){
        $('.mobile_menu').css('opacity','0');
        $(this).hide();
        $('.menu_toggle_black').show();
    });
    
    $('.topside_menu_mobile_toggle').click(function(){
        $('.topside_menu_mobile').addClass('on');
        $('.topside_menu_mobile_toggle').hide();});
    $('.topside_menu_mobile_close').click(function(){
        $('.topside_menu_mobile').removeClass('on');
        $('.topside_menu_mobile_toggle').show();
    });
});