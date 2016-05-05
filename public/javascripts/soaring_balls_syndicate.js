$(document).ready(function(){

    
$.fn.scrollView = function () {
return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
});
}


$('.menu_big_item').children('a').click(function(){
        $.fn.fullpage.setScrollingSpeed(0);
        $('.menu_big_toggle').show();
        $('.menu_big').removeClass('on');
});     
  
    
$('.menu_big_toggle').click(function(){ 
    $('.menu_big').addClass('on');
    $('.menu_big_toggle').hide();
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
    
  $('#fullpage').fullpage({
      anchors: ['home', 'intro1','intro2', 'works', 'clients', 'about', 'service', 'contact'],
      menu: "#menu",
      scrollingSpeed: 600,
      normalScrollElements: '#menu, .topside_menu_mobile',
      'easingcss3':'cubic-bezier(.77,.11,.8,.41)',
      verticalCentered: false,
      afterLoad: function(){
          $.fn.fullpage.setScrollingSpeed(600);
      },
      afterSlideLoad: function(){
          $.fn.fullpage.setScrollingSpeed(600);
      }
  });



});