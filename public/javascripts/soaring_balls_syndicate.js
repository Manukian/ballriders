$(document).ready(function(){

    
$.fn.scrollView = function () {
return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
});
}


$('.menu_big_item').children('a').click(function(){
     $('.menu_big_toggle').removeClass('menu_close');
        $('.menu_big').removeClass('on');
        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1])
});     
     
$('.arrow_down_pure').children('img').click(function(){
    $('#intro').scrollView();
});    
    
$(document).scroll(function(){
    var top = $(document).scrollTop();
    if ((top > 630) && (top < 1330)) {
        $('.menu_big_toggle').addClass('white');
    } else {
        $('.menu_big_toggle').removeClass('white');
    }
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

var hands = $('#hands');      

function cicle(what,a,b) {
    if (what.attr('id') == 'left'){
        start = 5.13;
        hands[0].currentTime = start;
        hands[0].ontimeupdate = function(){
        if ((hands[0].currentTime > b) && (hands[0].currentTime < start)) {
            hands[0].currentTime = a;
        }
        }
    }else {
        start = 2.34;
        hands[0].currentTime = start;
        hands[0].ontimeupdate = function(){
        if ((hands[0].currentTime > b) && (hands[0].currentTime > a)) {
        hands[0].currentTime = a;
    }
    }
    }

    setHandClass(what);
}
    
function setHandClass(elem) {
    elem.parent('section').children().each(function(){
        $(this).removeClass('handed');
    });
    elem.addClass('handed');
}    

function handsChange(elem) {
    if ((elem.attr('id') == 'left') && !(elem.hasClass('handed'))) {
        cicle(elem,0,2.13);
    }
    if ((elem.attr('id') == 'right') && !(elem.hasClass('handed'))) {
        cicle(elem,4.21,5.02);
    }
}
    
cicle($('#right'),0,2.13);
    
$('#left').click(function(){
    handsChange($(this));
    $('.project_list_collab').css('-webkit-transform', 'translateX(0)');
    $('.project_list_choreo').css('-webkit-transform', 'translateX(-150%)');
});

$('#right').click(function(){
    handsChange($(this));
    $('.project_list_choreo').css('-webkit-transform', 'translateX(0)');
    $('.project_list_collab').css('-webkit-transform', 'translateX(150%)');
});
    
$('.proj_link').mouseenter(function(){
    var t = $(this).parent().parent();
    t.addClass('active');
    t.find(".info_detail").stop().animate({
            height: "100%"
        }, 300, "swing");
});

$('.proj_link').mouseleave(function(){
    var t = $(this).parent().parent();
    t.removeClass('active');
    t.find(".info_detail").stop().animate({
            height: "0%"
        }, 300, "swing");
});
});