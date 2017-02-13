$(document).ready(function(){$.fn.scrollView=function(){return this.each(function(){$('html, body').animate({scrollTop:$(this).offset().top},1000);});}
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('.section').height($(window).height()+50);
    $('#home_section').height($(window).height());
} else {
    $('.section').height($(window).height());
}
$('#contact_section').children('.circle_wrapper').children('.arrow_pure').click(function () {
    $('#home_section').scrollView();
});
$('#home_section').children('.arrow_pure').click(function () {
    $('#about_section').scrollView();
});
$('.menu_big_item_link').click(function(){$('.menu_big_toggle').show();$('.menu_big').removeClass('on');});$('.menu_big_toggle').click(function(){$('.menu_big').addClass('on');$('.menu_big_toggle').hide();});$('.menu_big_toggle_black').click(function(){$('.menu_big').addClass('on');$('.menu_big_toggle').hide();});$('.menu_close').click(function(){$('.menu_big').removeClass('on');$('.menu_big_toggle').show();});$('.topside_menu_mobile_toggle').click(function(){$('.topside_menu_mobile').addClass('on');$('.topside_menu_mobile_toggle').hide();});$('.topside_menu_mobile_close').click(function(){$('.topside_menu_mobile').removeClass('on');$('.topside_menu_mobile_toggle').show();});});