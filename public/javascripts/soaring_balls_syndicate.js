$(window).on('load', function () {
    $preloader = $('.loader_area'),
    $loader = $preloader.find('.loader');
    $loader.delay(500).fadeOut('slow');
    $preloader.delay(600).fadeOut('slow');
    $('body').css('overflow','visible');
    
    $('.promo_circle_small').hover(function() {
        $('.promo_circle_small_text').show();
    });
    $('.promo_circle_small').mouseleave(function() {
        $('.promo_circle_small_text').hide();
    });
    $('.promo_close').click(function(){
        $('.promo_wrapper').addClass('promo_closed');
    });
    $('.promo_circle_small').click(function() {
        $('.promo_wrapper').addClass('circle_small_clicked');
        setTimeout("$('.promo_video_wrapper').addClass('promo_video_wrapper_show')",1000);
        $('.promo_video_wrapper').attr('src','https://player.vimeo.com/video/167247232?autoplay=1&color=c9ff23');
        $('.promo_video_close').show();
    });
    $('.promo_video_close').click(function () {
        $('.promo_wrapper').removeClass('circle_small_clicked');
        $('.promo_video_wrapper').removeClass('promo_video_wrapper_show');
        $('.promo_video_wrapper').attr('src','');
        $('.promo_video_close').hide();
    });
    
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
    new WOW().init();
});