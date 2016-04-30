$(document).ready(function(){

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