$(document).ready(function(){

    
$.fn.scrollView = function () {
return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
});
}


$('.menu_big_item').children('a').click(function(){
        $('.menu_big_toggle').show();
        $('.menu_big').removeClass('on');
        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1])
});     
     
$('.arrow_down_pure').click(function(){
    $('#intro').scrollView();
});   
    
$('.menu_big_toggle').click(function(){ 
       $('.menu_big').addClass('on');
        $('.menu_big_toggle').hide();
       // lock scroll position, but retain settings for later
        var scrollPosition = [
          self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
          self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
        ];
        var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
        html.data('scroll-position', scrollPosition);
        html.data('previous-overflow', html.css('overflow'));
        html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
});
    
$('.menu_close').click(function(){
    $('.menu_big').removeClass('on');
    $('.menu_big_toggle').show();
    var html = jQuery('html');
    var scrollPosition = html.data('scroll-position');
    html.css('overflow', html.data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1])
}); 

});