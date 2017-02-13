$(document).ready(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.section').height($(window).height()+70);
        $('#home_section').height($(window).height());
    } else {
        $('.section').height($(window).height());
    }
    $('.menu_big_item_link').click(function(){
        $('.menu_big_toggle').show();
        $('.menu_big').removeClass('on');
    });
    $('.menu_big_toggle_black').click(function(){
        $('.menu_big').addClass('on');
        $('.menu_big_toggle').hide();
    });
    $('.menu_close').click(function(){
        $('.menu_big').removeClass('on');
        $('.menu_big_toggle').show();
    });
    $('.topside_menu_mobile_toggle').click(function(){
        $('.topside_menu_mobile').addClass('on');
        $('.topside_menu_mobile_toggle').hide();
    });
    $('.topside_menu_mobile_close').click(function(){
        $('.topside_menu_mobile').removeClass('on');
        $('.topside_menu_mobile_toggle').show();
    });
});